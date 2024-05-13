import {Notification} from 'element-ui';
import {
  queryStaticSVG,
  queryTargetModel,
  queryStaticAudio,
  queryTranscript,
  queryProjectSpec,
  queryLinking,
  queryInsights,
} from "@/service/projService";
import JSON5 from 'json5';
import PROJECT_LIST from '@/assets/projects.json5';
import GALLERY_LIST from '@/assets/gallery.json5';
// import {TargetUtils} from "@/utils/target/TargetUtils";

// initial state
const state = () => ({
  projectList: PROJECT_LIST,
  galleryList: GALLERY_LIST,

  staticSvgMap: new Map(),
  staticSvgMapSign: false,

  projectId: null,    // default project
  projectSpec: null,    // list of single spec

  svgStrMap: new Map(),
  audioStrMap: new Map(),
  transcriptMap: new Map(),
  targetModelMap: new Map(),
  extraProjectSpecMap: new Map(),
  linkingMap: new Map(),
  insightsMap: new Map(),

  audioEl: null,
})

// getters
const getters = {
}

// actions
const actions = {
  async queryProjectSpec({commit, dispatch}, projectId) {
    commit('changeProjectId', projectId);
    commit('initResources');

    const projectFileName = projectId + '.json5';

    function queryAllSceneData(scenes) {
      const promiseList = [];
      for (const sceneSpec of scenes) {
        const svgFileName = sceneSpec.charts[0].source;
        if (svgFileName !== '') {
          const chartId = svgFileName.trim().replace('./', '').replace('.svg', '');
          promiseList.push(dispatch('queryStaticSVG', chartId));
          promiseList.push(dispatch('queryTranscript', chartId));
          promiseList.push(dispatch('queryStaticAudio', chartId));
          promiseList.push(dispatch('queryTargetModel', chartId));
          promiseList.push(dispatch('queryLinking', chartId));
        }
      }
      return Promise.all(promiseList);
    }

    queryProjectSpec(projectFileName, resp => {
      const projectSpec = typeof resp.data === 'string' ? JSON5.parse(resp.data) : resp.data;
      commit('changeProjectSpec', projectSpec);
      queryAllSceneData(projectSpec.scenes).then(() => {
        commit('project/initProjectView', null, {root: true});
      });
    }, errorResp => {
      Notification({title: "Fail to get sample file.", message: errorResp.message, type: 'error'})
      console.error(errorResp);
    })
  },
  async queryProjectSpec2({state, commit, dispatch}, projectId) {
    function queryAllSceneData(scenes) {
      const promiseList = [];
      for (const sceneSpec of scenes) {
        const svgFileName = sceneSpec.charts[0].source;
        if (svgFileName !== '') {
          const chartId = svgFileName.trim().replace('./', '').replace('.svg', '');
          promiseList.push(dispatch('queryStaticSVG', chartId));
          promiseList.push(dispatch('queryTranscript', chartId));
          promiseList.push(dispatch('queryStaticAudio', chartId));
          promiseList.push(dispatch('queryTargetModel', chartId));
          promiseList.push(dispatch('queryLinking', chartId));
          promiseList.push(dispatch('queryInsights', chartId));
        }
      }
      return Promise.all(promiseList);
    }

    if (state.extraProjectSpecMap.has(projectId)) {
      const srcId = projectId;
      commit('changeProjectId', projectId);
      commit('initResources');
      const {svgStr, targetModel, transcript, insights, audioStr, fakeProjectSpec} = state.extraProjectSpecMap.get(projectId);
      commit('changeProjectSpec', fakeProjectSpec);
      commit('addSVGStr', {srcId, svgStr});
      commit('addStaticSVGStr', {srcId, svgStr});
      commit('addTargetModel', {srcId, targetModel});
      commit('addTranscript', {srcId, transcript});
      commit('addAudioStr', {srcId, audioStr});
      commit('addInsights', {srcId, insights});

      commit('project/initProjectView', null, {root: true});
      commit('editor/changeSceneById', 0, {root: true});
      commit('editor/initWorkspace', null, {root: true});
    } else {
      commit('changeProjectId', projectId);
      commit('initResources');

      const projectFileName = projectId + '.json5';
      queryProjectSpec(projectFileName, resp => {
        const projectSpec = typeof resp.data === 'string' ? JSON5.parse(resp.data) : resp.data;
        commit('changeProjectSpec', projectSpec);
        queryAllSceneData(projectSpec.scenes).then(() => {
          commit('project/initProjectView', null, {root: true});
          commit('editor/changeSceneById', 0, {root: true});
          commit('editor/initWorkspace', true, {root: true});
        });
      }, errorResp => {
        Notification({title: "Fail to get sample file.", message: errorResp.message, type: 'error'})
        console.error(errorResp);
      })
    }


  },
  async queryAllSvg({state, commit}) {
    state.projectList.forEach(project => {
      const projectId = project.id;

      if (state.staticSvgMap.has(projectId)) {
        return;
      }

      const projectFileName = projectId + '.json5';
      queryProjectSpec(projectFileName, resp => {
        const projectSpec = typeof resp.data === 'string' ? JSON5.parse(resp.data) : resp.data;

        const sceneSpec = projectSpec.scenes[0];    // only one scene in a project
        const svgFileName = sceneSpec.charts[0].source;   // only one chart in a scene

        if (svgFileName !== '') {
          const srcId = svgFileName.trim().replace('./', '').replace('.svg', '');
          const fileName = srcId + '.svg';
          queryStaticSVG(fileName, resp => {
            commit('addStaticSVGStr', {projectId, svgStr: resp.data});
          }, errorResp => {
            commit('addStaticSVGStr', {projectId, svgStr: ''});
            console.error(errorResp);
          })
        }
      }, errorResp => {
        console.error(errorResp);
      })
    })
  },
  queryStaticSVG({commit}, srcId) {
    const fileName = srcId + '.svg';
    return queryStaticSVG(fileName, resp => {
      commit('addSVGStr', {srcId, svgStr: resp.data});
    }, errorResp => {
      commit('addSVGStr', {srcId, svgStr: ''});
      Notification({title: `Chart resource ${fileName} not found.`,
        message: errorResp.message, type: 'warning'})
      console.error(errorResp);
    })
  },
  queryInsights({commit}, srcId) {
    const fileName = srcId + '.json';
    return queryInsights(fileName, resp => {
      commit('addInsights', {srcId, insights: resp.data});
    }, errorResp => {
      commit('addInsights', {srcId, insights: {}});
      Notification({title: `Insights resource ${fileName} not found.`,
        message: errorResp.message, type: 'warning'})
      console.error(errorResp);
    })
  },
  queryStaticAudio({commit}, srcId) {
    const fileName = srcId + '.txt';
    return queryStaticAudio(fileName, resp => {
      commit('addAudioStr', {srcId, audioStr: resp.data});
    }, errorResp => {
      commit('addAudioStr', {srcId, audioStr: ''});
      Notification({title: "Fail to get static audio.", message: errorResp.message, type: 'error'})
      console.log(errorResp)
    })
  },
  queryTranscript({commit}, srcId) {
    const fileName = srcId + '.json';
    return queryTranscript(fileName, resp => {
      commit('addTranscript', {srcId, transcript: resp.data});
    }, errorResp => {
      commit('addTranscript', {srcId, transcript: {}});
      Notification({title: `Transcript resource ${fileName} not found.`,
        message: errorResp.message, type: 'warning'})
      console.error(errorResp);
    })
  },
  queryTargetModel({commit}, srcId) {
    const fileName = srcId + '.json';
    return queryTargetModel(fileName, resp => {
      commit('addTargetModel', {srcId, targetModel: resp.data});
    }, errorResp => {
      commit('addTargetModel', {srcId, targetModel: null});
      if (fileName.includes('vega')) {
        return;
      }
      // Notification({title: `Target model ${fileName} not found.`,
      //   message: errorResp.message, type: 'warning'})
      console.log(errorResp);
    })
  },
  queryLinking({commit}, srcId) {
    const fileName = srcId + '.json';
    return queryLinking(fileName, resp => {
      commit('addLinking', {srcId, linking: resp.data});
    }, errorResp => {
      commit('addLinking', {srcId, linking: null});
      if (fileName.includes('vega')) {
        return;
      }
      Notification({title: `Linking ${fileName} not found.`,
        message: errorResp.message, type: 'warning'})
      console.log(errorResp);
    })
  },
}

// mutations
const mutations = {
  changeProjectId(state, projectId) {
    state.projectId = projectId;
  },
  initResources(state) {
    state.projectSpec = null;

    state.svgStrMap = new Map();
    state.audioStrMap = new Map();
    state.transcriptMap = new Map();
    state.targetModelMap = new Map();
    state.insightsMap = new Map();
  },
  changeProjectSpec(state, projectSpec) {
    state.projectSpec = projectSpec;
  },

  addSVGStr(state, {srcId, svgStr}) {
    state.svgStrMap.set(srcId, svgStr);
  },
  addStaticSVGStr(state, {projectId, svgStr}) {
    state.staticSvgMap.set(projectId, svgStr);
    setTimeout(() => this.commit('resource/changeStaticSvgMapSign'), 0);
  },
  changeStaticSvgMapSign(state) {
    state.staticSvgMapSign ^= true;
  },
  addInsights(state, {srcId, insights}) {
    state.insightsMap.set(srcId, insights);
  },
  addAudioStr(state, {srcId, audioStr}) {
    state.audioStrMap.set(srcId, audioStr);
  },
  addTranscript(state, {srcId, transcript}) {
    state.transcriptMap.set(srcId, transcript);
  },
  addTargetModel(state, {srcId, targetModel}) {
    state.targetModelMap.set(srcId, targetModel);
  },
  addLinking(state, {srcId, linking}) {
    state.linkingMap.set(srcId, linking);
  },

  updateSVGModel(state, {chartId, svgStr, targetModel}) {
    state.svgStrMap.set(chartId, svgStr);
    state.targetModelMap.set(chartId, targetModel);
  },

  registerAudioEl(state, audioEl) {
    state.audioEl = audioEl
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
