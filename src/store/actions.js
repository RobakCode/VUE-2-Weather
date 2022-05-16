import _ from 'lodash';
import apiGetWeather from '@/utils/apiGetWeather';
import cityList from '@/utils/city.list.json';

export const getWeather = async ({ getters, commit }) => {
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
};

export const setUnits = ({ commit }, unitCelsius) => {
  commit('setUnits', unitCelsius);
};

export const setLanguage = ({ commit }, language) => {
  commit('setLanguage', language);
};

export const setSearchParams = ({ commit }, city) => {
  commit('setSearchParams', city);
  commit('setFindCityList', []);
};

export const loadCityList = async ({ commit }) => {
  const names = cityList.map((x) => x.name);
  const uNames = new Set(names);
  await commit('loadCityList', cityList);
  await commit('loadCityNames', [...uNames]);
  commit('setLoadingStatus', false);
};

export const findCity = ({ commit, getters }, value) => {
  commit('setFindCityList', getters.cityList.filter((x) => x?.name?.toLowerCase()?.includes(value.toLowerCase()))?.slice(0, 10));
};

export const setLongTermWeather = ({ commit }, value) => {
  commit('setLongTermWeather', value);
};
