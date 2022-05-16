import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'pl-PL',
  messages: {
    'en-US': {
      placeholderSearchCity: 'Search city...',
      polish: 'Polish',
      english: 'English',
      today: 'Today',
      week: 'Week',
      minTemp: 'Min temperature',
      maxTemp: 'Max temperature',
      windSpeed: 'Wind speed',
      ms: 'meter/sec',
      mh: 'miles/hour',
      fahrenheit: 'Fahrenheit',
      celsius: 'Celsius',
      location: 'City',
      additionaInformation: 'Additional information:',
      errorMessage: 'Error :/ Pleas try again!',
      day: {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday',
      },
    },
    'pl-PL': {
      placeholderSearchCity: 'Wyszukaj miasto...',
      polish: 'Polski',
      english: 'Angielski',
      today: 'Dziś',
      week: 'Tydzień',
      minTemp: 'Najniższa temperatura',
      maxTemp: 'Najwyższa temperatura',
      windSpeed: 'Prędkość wiatru',
      ms: 'metrów/sekunde',
      mh: 'mile/godzine',
      fahrenheit: 'Fahrenheit',
      celsius: 'Celsius',
      location: 'Miasto',
      additionaInformation: 'Dodatkowe informacje:',
      errorMessage: 'Coś poszło nie tak :/ Odśwież stronę i spróbuj ponownie!',
      day: {
        1: 'Poniedziałek',
        2: 'Wtorek',
        3: 'Środa',
        4: 'Czwartek',
        5: 'Piątek',
        6: 'Sobota',
        7: 'Niedziela',
      },
    },
  },
});

new Vue({
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
