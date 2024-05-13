import Vue from 'vue'
import Vuex from 'vuex'
import resource from "@/store/modules/resource";

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    resource,
  },
  // strict: debug,
  strict: false,
})
