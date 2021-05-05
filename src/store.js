import Vue from "vue";
import Vuex from "vuex";
import { alphaNumbers, actionKeys, splChars } from "@/constant.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alphaNumbers: alphaNumbers,
    actionKeys: actionKeys,
    splChars: splChars
  },
  mutations: {},
  actions: {}
});
