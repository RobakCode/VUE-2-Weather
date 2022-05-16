import axios from 'axios';

const apiGetWeather = async ({ coord }, units) => {
  const today = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=${units}&appid=${process.env.VUE_APP_WEATHER_APP_ID}`).then((response) => response.data).catch(() => ({ error: true }));
  const week = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=${units}&appid=${process.env.VUE_APP_WEATHER_APP_ID}`).then((response) => response.data).catch(() => ({ error: true }));

  return today?.error || week?.error ? { error: true } : {
    today,
    week,
  };
};

export default apiGetWeather;
