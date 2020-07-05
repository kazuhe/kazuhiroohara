<template>
  <div class="lead">
    <h1 class="lead_title">{{ title }}</h1>
    <p class="lead_subTitle">{{ subTitle }}</p>
    <p class="lead_text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Lead',
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    text: {
      type: String
    }
  }
})
</script>

<style lang="scss">
.lead {
  &_title {
    margin-top: 30px;
  }

  &_subTitle {
    font-size: 1.3rem;
    color: $deepGray;
    font-weight: 600;
    margin-top: 5px;
  }

  &_text {
    margin-top: 30px;
  }
}
</style>
