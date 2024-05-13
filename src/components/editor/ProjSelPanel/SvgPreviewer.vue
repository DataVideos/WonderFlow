<template>
  <div class="svg-previewer"
       :style="{height: height + 'px', width: width + 'px'}">
    <svg ref="svg" :height="height" :width="width">
      <g class="scene">
      </g>
    </svg>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: 'SvgPreviewer',
    props: [
      'project', 'width', 'height'
    ],
    data() {
      return {
        svg: null,
        scene: null,

        created: false,
      }
    },
    methods: {
      loadSVG() {
        if (this.created) {
          return;   // one project id, one svg creation
        }
        const svgStr = this.staticSvgMap.get(this.project.id);
        if (!svgStr) {
          return;
        }
        this.created = true;

        this.scene.innerHTML = svgStr;
        this.$nextTick(() => {
          const innerSvg = this.scene.querySelector('svg');
          innerSvg.setAttribute('width', this.width);
          innerSvg.setAttribute('height', this.height);

          let viewBoxStr = innerSvg.getAttribute('viewBox');
          if (!viewBoxStr || !viewBoxStr.match(/\d+ \d+ \d+ \d+/)) {
            // viewBox settings is missing or incorrect
            // try to fix it first
            const {width, height} = this.scene.getBoundingClientRect();
            viewBoxStr = `0 0 ${width} ${height}`;
          }

          // fulfill the previewer panel
          const numbers = viewBoxStr.split(' ')
          const w = parseInt(numbers[2]), h = parseInt(numbers[3])
          if (w / h > this.width / this.height) {
            const newWidth = Math.floor(this.width / this.height * h);
            const startX = Math.ceil((w - newWidth) / 2);
            viewBoxStr = `${startX} 0 ${newWidth} ${h}`
          } else {
            const newHeight = Math.round(this.height / this.width * w);
            const startY = Math.ceil((h - newHeight) / 2)
            viewBoxStr = `0 ${startY} ${w} ${newHeight}`
          }

          innerSvg.setAttribute('viewBox', viewBoxStr);
        })
      }
    },
    mounted() {
      this.svg = this.$refs.svg;
      this.scene = this.svg.querySelector('.scene');
    },
    watch: {
      staticSvgMapSign() {
        this.loadSVG();
      }
    },
    computed: {
      ...mapState('resource', {
        staticSvgMap: state => state.staticSvgMap,
        staticSvgMapSign: state => state.staticSvgMapSign,
      }),
    }
  }
</script>

<style scoped>

</style>
