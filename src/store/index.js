import Vue from 'vue';
import Vuex from 'vuex';
import cityList from '@/utils/city.list.min.json';
// import cityList from '@/utils/test.json';
import apiGetWeather from '@/utils/apiGetWeather';
import _ from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
    todayWeather: {},
    searchParams: {},
    loading: true,
    loadingError: false,
    cityList: [],
    findCity: [],
    userOptions: {
      language: 'en-US',
      unitCelsius: true,
      longTermWeather: false,
    },
  },
  getters: {
    loadingStatus(state) {
      return state.loading;
    },
    errorStatus(state) {
      return state.loadingError;
    },
    language(state) {
      return state.userOptions.language;
    },
    celsius(state) {
      return state.userOptions.unitCelsius;
    },
    longTermWeather(state) {
      return state.userOptions.longTermWeather;
    },
    cityList(state) {
      return state.cityList;
    },
    findCityList(state) {
      return state.findCity;
    },
    searchParams(state) {
      return state.searchParams;
    },
    weather(state) {
      return state.weather;
    },
    todayWeather(state) {
      return state.todayWeather;
    },
  },
  mutations: {
    setUnits(state, unitCelsius) {
      state.userOptions.unitCelsius = unitCelsius;
    },
    setLanguage(state, language) {
      state.userOptions.language = language;
    },
    loadCityList(state, data) {
      state.cityList = data;
    },
    setLoadingStatus(state, status) {
      state.loading = status;
    },
    setErrorStatus(state, status) {
      state.loadingError = status;
    },
    setFindCityList(state, list) {
      state.findCity = list;
    },
    setSearchParams(state, params) {
      state.searchParams = params;
    },
    setWeather(state, weather) {
      state.weather = weather;
    },
    setTodayWeather(state, weather) {
      state.todayWeather = weather;
    },
    setLongTermWeather(state, status) {
      state.userOptions.longTermWeather = status;
    },
  },
  actions: {
    async getWeather({ getters, commit }) {
      commit('setLoadingStatus', true);
      if (!getters?.searchParams?.coord) commit('setErrorStatus', true);

      const newWeather = await apiGetWeather(getters.searchParams, getters.celsius ? 'metric' : 'imperial');
      if (newWeather?.error) commit('setErrorStatus', true);

      const reduceWeather = newWeather.week.list.reduce((prev, current) => {
        const indexs = current.dt_txt.split(' ');

        const nextValue = _.assign(prev, {
          [indexs[0]]: {
            ...prev[indexs[0]],
            [indexs[1]]: current,
          },
        });

        return nextValue;
      }, {});

      commit('setWeather', reduceWeather);
      commit('setTodayWeather', newWeather.today);
      commit('setLoadingStatus', false);
    },
    setUnits({ commit }, unitCelsius) {
      commit('setUnits', unitCelsius);
    },
    setLanguage({ commit }, language) {
      commit('setLanguage', language);
    },
    setSearchParams({ commit }, params) {
      commit('setSearchParams', params);
      commit('setFindCityList', []);
    },
    async loadCityList({ commit }) {
      await commit('loadCityList', cityList);
      commit('setLoadingStatus', false);
    },
    findCity({ commit, getters }, value) {
      commit('setFindCityList', getters.cityList.filter((x) => x?.name?.includes(value))?.slice(0, 10));
    },
    setLongTermWeather({ commit }, value) {
      commit('setLongTermWeather', value);
    },
  },
  modules: {
  },
});
