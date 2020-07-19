<template>
  <div class="breadcrumb">
    <ul class="breadcrumb_list">
      <li><router-link to="/">Home</router-link></li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <Arrow />
        <router-link v-if="crumb.path" :to="crumb.path">
          {{ crumb.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Arrow from '@/components/svg/Arrow.vue'

export default defineComponent({
  name: 'Breadcrumb',
  components: {
    Arrow
  },
  props: {
    breadcrumbs: {
      type: Array
    }
  }
})
</script>

<style lang="scss">
.breadcrumb {
  @include maxWidth();

  &_list {
    display: inline-flex;
    align-items: center;
    margin-top: 15px;
    padding: 0 10px;
    background: $highGray;
    border-radius: 50px;
    @include mq-md() {
      margin-top: 30px;
    }
    li {
      padding: 7px;
      display: flex;
      align-items: center;
      a {
        font-size: 1.4rem;
        font-weight: 500;
        &.router-link-active {
          color: $mainColor;
        }
      }
      svg {
        display: block;
        width: 10px;
        margin-right: 10px;
        transform: translate(-2px, 0) rotate(270deg);
        fill: $trueGray;
      }
    }
  }
}
</style>
