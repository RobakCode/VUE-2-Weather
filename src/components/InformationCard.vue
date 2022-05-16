<template lang="pug">
.information-card
  h3.lead {{title}}
  .information-card__inner
    span.headline {{headline}}
    span.lead {{lead}}
</template>

<script>
export default {
  name: 'InformationCard',
  props: ['title', 'headline', 'lead'],
};
</script>

<style lang="stylus">
@import '@/theme/typography.styl'
@import '@/theme/variables.styl'

.information-card
  background-color: $background-white
  border-radius: 16px
  padding: 8px 16px

  &__inner
    display: flex
    flex-direction: column
    align-items: flex-end

    .lead
      margin-bottom: 12px

@media (min-width: $break-desktop)
  .information-card
    &__inner
      flex-direction: row
</style>
