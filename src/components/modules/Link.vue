<template>
  <ul class="link">
    <li v-if="github" class="link_item">
      <Github />
      <a :href="github" target="_blank" rel="nofollow">{{ github }}</a>
    </li>
    <li v-if="twitter" class="link_item">
      <Twitter />
      <a :href="twitter" target="_blank" rel="nofollow">{{ twitter }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Twitter from '@/components/svg/Twitter.vue'
import Github from '@/components/svg/Github.vue'

export default defineComponent({
  name: 'link',
  components: {
    Twitter,
    Github
  },
  props: {
    github: {
      type: String,
      reqired: false
    },
    twitter: {
      type: String,
      reqired: false
    }
  }
})
</script>

<style lang="scss">
.link {
  &_item {
    display: flex;
    align-items: center;
    margin-top: 10px;
    a {
      font-size: 1.2rem;
    }
    svg {
      fill: $deepGray;
      width: 20px;
      margin-right: 5px;
    }
  }
}
</style>
