<template lang="pug">
LayoutDefault()
  ComponentAside(slot="aside")
  ComponentMain()
</template>

<script>
import LayoutDefault from '@/layouts/Default.vue';
import ComponentAside from '@/components/ComponentAside.vue';
import ComponentMain from '@/components/ComponentMain.vue';

export default {
  name: 'Weather-app',
  components: {
    LayoutDefault,
    ComponentAside,
    ComponentMain,
  },
};
</script>

<style lang="stylus">
@import '@/theme/base.styl'
</style>
