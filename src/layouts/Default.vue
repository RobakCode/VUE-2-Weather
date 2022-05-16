<template lang="pug">
div
  Error(v-if="errorStatus")
  Loading(v-if="loadingStatus")
  .layout-default__wrapper
    aside
      slot(name="aside")
    main
      slot
</template>

<script>
import { mapGetters } from 'vuex';
import Loading from '@/components/Loading.vue';
import Error from '@/components/Error.vue';

export default {
  name: 'LayoutDefault',
  components: {
    Loading,
    Error,
  },
  computed: {
    ...mapGetters(['loadingStatus', 'errorStatus']),
  },
};
</script>

<style lang="stylus">
@import '@/theme/font.styl'
@import '@/theme/variables.styl'

.layout-default
  &__wrapper
    display: block

    aside
      background-color: $background-white
      padding: 32px 16px

    main
      background-color: $background
      padding: 32px 16px

@media (min-width: $break-desktop)
  .layout-default
    &__wrapper
      display: grid
      grid-template-columns: 20% 1fr
      min-height: 100vh

      aside
        padding: 46px 33px

      main
        padding: 46px 33px
</style>
