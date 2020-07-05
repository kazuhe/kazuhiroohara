<template>
  <div class="title">
    <h2>{{ h2 }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Title',
  props: {
    h2: {
      type: String
    },
    name: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss"></style>
