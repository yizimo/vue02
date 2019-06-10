import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  httpUrl : 'http://192.168.43.159:8080',
  token : '',
  user : '',
  imgUrl : 'http://60.205.209.99:8899/'
};
const mutations = {
  changeToekn(state, token){
    state.token = token;
  },
  changeUse(state, user) {
    state.user = user;
  }
};
const actions = {
  changeTokenFooter(context, token) {
    context.commit('changeToekn', token);
  },
  changeUse(context, user) {
    context.commit('changeUse', user);
  }
}
const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});

export default store;
