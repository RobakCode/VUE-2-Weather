<template lang="pug">
.loading__wrapper
  .lds-dual-ring
</template>

<script>
export default {
  name: 'LoadingComponent',
};
</script>

<style lang="stylus">
@import '@/theme/variables.styl'

.loading
  &__wrapper
    display: flex
    align-items: center
    justify-content: center
    position: fixed
    content: ""
    left: 0
    top: 0
    width: 100%
    height: 100%
    background-color: rgba(255,255,255,0.7)
    box-shadow: 0 0 20px #fff
    z-index: 9999999
    overflow: hidden

    .lds-dual-ring
      display: inline-block;
      width: 80px;
      height: 80px;

    .lds-dual-ring:after
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid $blue;
      border-color: $blue transparent $blue transparent;
      animation: lds-dual-ring 1.2s linear infinite;

    @keyframes lds-dual-ring
      0%
        transform: rotate(0deg)
      100%
        transform: rotate(360deg)

</style>
