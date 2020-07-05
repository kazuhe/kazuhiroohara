<template>
  <section class="section" :class="[{ '-gray': gray }, { '-dark': dark }]">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section',
  props: {
    gray: {
      type: String,
      dafault: false
    },
    dark: {
      type: String,
      dafault: false
    }
  }
})
</script>

<style lang="scss">
.section {
  margin-top: 30px;

  &.-gray {
    background: $highGray;
    margin-left: -15px;
    margin-right: -15px;
    padding: 30px 15px;
    @include mq-up() {
      margin-left: -80px;
      margin-right: -80px;
      padding: 30px 80px;
    }
  }

  &.-dark {
    background: $subColor;
    color: #fff;
    margin-left: -15px;
    margin-right: -15px;
    padding: 30px 15px;
    @include mq-up() {
      margin-left: -80px;
      margin-right: -80px;
      padding: 30px 80px;
    }
  }
}
</style>
