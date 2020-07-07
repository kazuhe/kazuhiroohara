<template>
  <div class="title">
    <h2>{{ h2 }}</h2>
    <p>{{ p }}</p>
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
    p: {
      type: String
    }
  }
})
</script>

<style lang="scss">
.title {
  @include mq-up() {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  p {
    font-size: 1.1rem;
    color: $deepGray;
    font-weight: 600;
    margin-top: 5px;
    @include mq-up() {
      font-size: 1.3rem;
      margin-top: 0;
      margin-left: 15px;
    }
  }
}
</style>
