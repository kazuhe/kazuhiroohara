<template>
  <li class="carousel_item">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Slide'
})
</script>

<style lang="scss" scoped>
.carousel {
  &_item {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
</style>
