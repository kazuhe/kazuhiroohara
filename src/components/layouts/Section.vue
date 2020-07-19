<template>
  <section class="section" :class="[{ '-gray': gray }, { '-dark': dark }]">
    <div class="section_inner">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Section',
  props: {
    gray: {
      type: Boolean,
      dafault: false
    },
    dark: {
      type: Boolean,
      dafault: false
    }
  }
})
</script>

<style lang="scss">
.section {
  margin-top: 30px;
  @include mq-md() {
    margin-top: 80px;
  }

  &_inner {
    @include maxWidth();
  }

  &.-gray {
    background: $highGray;
    margin-left: -15px;
    margin-right: -15px;
    padding: 30px 15px;
    @include mq-md() {
      margin-left: -80px;
      margin-right: -80px;
      padding: 50px 80px;
    }
  }

  &.-dark {
    background: $subColor;
    color: #fff;
    margin-left: -15px;
    margin-right: -15px;
    padding: 30px 15px;
    @include mq-md() {
      margin-left: -80px;
      margin-right: -80px;
      padding: 50px 80px;
    }
  }
}
</style>
