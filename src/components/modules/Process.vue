<template>
  <ul class="process">
    <li v-for="(process, index) in processes" :key="index">
      <div class="process_mark"></div>
      <div>
        <p class="process_day">{{ process.day }}</p>
        <h3 class="process_title">{{ process.title }}</h3>
        <p class="process_text">{{ process.text }}</p>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Process',
  props: {
    processes: {
      type: Array
    }
  }
})
</script>

<style lang="scss">
.process {
  li {
    position: relative;
    display: flex;
    &::after {
      content: '';
      display: block;
      width: 1px;
      height: calc(100% - 55px);
      background: darken($highGray, 10%);
      position: absolute;
      top: 55px;
      left: 22.5px;
    }
  }

  li + li {
    margin-top: 15px;
  }

  &_mark {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    background-color: $highGray;
    &::after {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: $mainColor;
    }
  }

  &_day {
    font-size: 1.1rem;
    font-weight: 600;
    color: $deepGray;
  }

  &_title {
    font-size: 1.6rem;
    margin-top: 5px;
  }

  &_text {
    font-size: 1.3rem;
    margin-top: 10px;
    line-height: 1.4;
  }
}
</style>
