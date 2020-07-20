<template>
  <ul class="list">
    <li v-for="(list, index) in lists" :key="index">
      <Check />
      <p>{{ list }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Check from '@/components/svg/Check.vue'

export default defineComponent({
  name: 'List',
  components: {
    Check
  },
  props: {
    lists: {
      type: Object
    }
  }
})
</script>

<style lang="scss">
.list {
  li {
    svg {
      fill: $mainColor;
      padding: 5px;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background: $textColor;
      float: left;
      transform: translateY(2px);
    }
    p {
      padding-left: 30px;
    }
  }

  li + li {
    margin-top: 10px;
  }
}
</style>
