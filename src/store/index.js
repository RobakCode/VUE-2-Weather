import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
    todayWeather: {},
    searchParams: {},
    loading: true,
    loadingError: false,
    cityList: [],
    cityNames: [],
    findCity: [],
    userOptions: {
      language: 'pl-PL',
      unitCelsius: true,
      longTermWeather: false,
    },
  },
  getters,
  actions,
  mutations,
});
