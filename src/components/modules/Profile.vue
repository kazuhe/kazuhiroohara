<template>
  <div class="profile">
    <img :src="loadImage()" alt="" />
    <div>
      <h3 class="profile_name">{{ name }}</h3>
      <p v-if="github" class="profile_link">
        <Github />
        <a :href="github" target="_blank" rel="nofollow">{{ github }}</a>
      </p>
      <p v-if="twitter" class="profile_link">
        <Twitter />
        <a :href="twitter" target="_blank" rel="nofollow">{{ twitter }}</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Twitter from '@/components/svg/Twitter.vue'
import Github from '@/components/svg/Github.vue'

export default defineComponent({
  name: 'Profile',
  components: {
    Twitter,
    Github
  },
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    github: {
      type: String
    },
    twitter: {
      type: String
    }
  },
  setup(props) {
    const loadImage = (): string => {
      return require(`@/assets/img/${props.image}`)
    }

    return {
      loadImage
    }
  }
})
</script>

<style lang="scss">
.profile {
  display: flex;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 15px;
  }

  &_name {
    font-weight: 600;
  }

  &_link {
    display: flex;
    align-items: center;
    margin-top: 10px;
    a {
      font-size: 1.2rem;
      color: $deepGray;
      text-decoration: underline;
    }
    svg {
      display: block;
      fill: $deepGray;
      width: 20px;
      margin-right: 5px;
    }
  }
}
</style>
