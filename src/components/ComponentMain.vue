<template lang="pug">
.main
  MainNavigation
  template(v-if="weatherCardItems.length && longTermWeather")
    WeatherCardItems(:items="weatherCardItems")
  template(v-if="!longTermWeather && weatherTodayCardItems.length")
    WeatherCardItems(:items="weatherTodayCardItems")
  div(v-if="searchParams.name && todayWeather.main")
    .information-card__title
      h2.title {{$t('additionaInformation')}} {{$t(`day.${new Date(todayWeather.dt).getDay()}`)}}
    div(v-if="informationCardItem").information-card__wrapper
      template(v-for="item in informationCardItem")
        InformationCard(
          :title="item.title"
          :headline="item.headline"
          :lead="item.lead"
        )

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getTodayDateString, getTimeFromDtTxt } from '@/utils/date';
import getIconName from '@/utils/getIconName';
import MainNavigation from './MainNavigation.vue';
import WeatherCardItems from './WeatherCardItems.vue';
import InformationCard from './InformationCard.vue';

export default {
  name: 'ComponentMain',
  components: {
    WeatherCardItems,
    InformationCard,
    MainNavigation,
  },
  computed: {
    ...mapGetters(['weather', 'todayWeather', 'searchParams', 'longTermWeather', 'celsius']),
    weatherCardItems() {
      if (!Object.values(this.weather).length) return {};

      const result = Object.values(this.weather)
        .map((day) => Object.values(day).reduce((prev, current) => {
          const date = new Date().getHours();
          const prevDate = prev?.dt_txt && new Date(prev.dt_txt).getHours();
          const currentDate = new Date(current.dt_txt).getHours();
          const setNewIcon = !prevDate ? true : prevDate - date > currentDate - date;

          return {
            title: this.$t(`day.${new Date(current.dt_txt.split(' ')[0]).getDay()}`),
            minTemp: prev?.minTemp && prev?.minTemp < current?.main?.temp?.toFixed()
              ? prev.minTemp
              : current?.main?.temp?.toFixed(),
            maxTemp: prev?.maxTemp && prev?.maxTemp > current?.main?.temp?.toFixed()
              ? prev.maxTemp
              : current?.main?.temp?.toFixed(),
            icon: setNewIcon ? `/icons/${getIconName(current.weather[0].main || '')}.svg` : `/icons/${getIconName(prev.weather[0].main || '')}.svg`,
            ...current,
          };
        }), {});

      return result;
    },
    weatherTodayCardItems() {
      if (!Object.values(this.weather).length) return {};

      const todayDate = getTodayDateString();
      const activeDay = this.weather[todayDate];

      if (!this.longTermWeather && activeDay) {
        return Object.values(activeDay).map((item) => ({
          title: getTimeFromDtTxt(item.dt_txt),
          icon: `/icons/${getIconName(item.weather[0].main || '')}.svg`,
          temp: item.main.temp.toFixed(),
        }));
      }

      return {};
    },
    informationCardItem() {
      if (!this.todayWeather.main) return null;

      const result = [];

      result.push({ title: this.$t('location'), headline: this?.searchParams?.name });
      result.push({ title: this.$t('minTemp'), headline: this?.todayWeather?.main?.temp_min.toFixed(), lead: this.celsius ? this.$t('celsius') : this.$t('fahrenheit') });
      result.push({ title: this.$t('maxTemp'), headline: this?.todayWeather?.main?.temp_max.toFixed(), lead: this.celsius ? this.$t('celsius') : this.$t('fahrenheit') });
      result.push({ title: this.$t('windSpeed'), headline: this?.todayWeather?.wind?.speed, lead: this.celsius ? this.$t('ms') : this.$t('mh') });

      return result;
    },
  },
  mounted() {
    this.loadCityList();
  },
  update() {
    console.log('longTermWeather', this.longTermWeather);
  },
  methods: {
    ...mapActions(['getWeather', 'loadCityList']),
  },
};
</script>

<style lang="stylus" scoped>
@import '@/theme/typography.styl'

.main
  position: relative

.information-card
  &__wrapper
    display: grid
    grid-template-columns: repeat(1, 1fr)
    gap: 24px
    width: 100%

  &__title
    margin-top: 32px

@media (min-width: $break-desktop)
  .information-card
    &__wrapper
      grid-template-columns: repeat(3, 1fr)
</style>
