<template>
  <div class="profile">
    <img :src="loadImage()" alt="" />
    <div>
      <h3 class="profile_name">{{ name }}</h3>
      <Link
        github="https://github.com/kazuhe"
        twitter="https://twitter.com/kazuhiroohara_"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Link from '@/components/modules/Link.vue'

export default defineComponent({
  name: 'Profile',
  components: {
    Link
  },
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
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
    flex-shrink: 0;
  }

  &_name {
    font-weight: 600;
  }
}
</style>
