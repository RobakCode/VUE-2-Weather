export const loadingStatus = (state) => state.loading;

export const errorStatus = (state) => state.loadingError;

export const language = (state) => state.userOptions.language;

export const celsius = (state) => state.userOptions.unitCelsius;

export const longTermWeather = (state) => state.userOptions.longTermWeather;

export const cityList = (state) => state.cityList;

export const cityNames = (state) => state.cityNames;

export const findCityList = (state) => state.findCity;

export const searchParams = (state) => state.searchParams;

export const weather = (state) => state.weather;

export const todayWeather = (state) => state.todayWeather;
