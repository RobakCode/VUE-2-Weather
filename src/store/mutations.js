export const setUnits = (state, unitCelsius) => {
  state.userOptions.unitCelsius = unitCelsius;
};

export const setLanguage = (state, language) => {
  state.userOptions.language = language;
};

export const loadCityList = (state, data) => {
  state.cityList = data;
};

export const loadCityNames = (state, data) => {
  state.cityNames = data;
};

export const setLoadingStatus = (state, status) => {
  state.loading = status;
};

export const setErrorStatus = (state, status) => {
  state.loadingError = status;
};

export const setFindCityList = (state, list) => {
  state.findCity = list;
};

export const setSearchParams = (state, params) => {
  state.searchParams = params;
};

export const setWeather = (state, weather) => {
  state.weather = weather;
};

export const setTodayWeather = (state, weather) => {
  state.todayWeather = weather;
};

export const setLongTermWeather = (state, status) => {
  state.userOptions.longTermWeather = status;
};
