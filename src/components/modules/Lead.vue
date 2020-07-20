<template>
  <div class="lead" :class="{ '-image': image }" :style="loadImage()">
    <div class="lead_inner">
      <h1 class="lead_title">{{ title }}</h1>
      <p class="lead_subTitle">{{ subTitle }}</p>
      <p v-if="text" class="lead_text">{{ text }}</p>
    </div>
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
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const loadImage = () => {
      if (props.image) {
        return {
          'background-image': `url(${require(`@/assets/img/${props.image}`)})`
        }
      }
      return false
    }

    return {
      loadImage
    }
  }
})
</script>

<style lang="scss">
.lead {
  margin-top: 30px;
  @include mq-md() {
    margin-top: 50px;
  }

  &.-image {
    position: relative;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: -45px;
    margin-left: -15px;
    margin-right: -15px;
    padding: 75px 15px 30px;
    z-index: -1;
    color: #fff;
    .lead_subTitle {
      color: #fff;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0,
        rgba(0, 0, 0, 0.7) 100%
      );
      z-index: -1;
    }
    @include mq-md() {
      margin-top: -60px;
      margin-left: -80px;
      margin-right: -80px;
      padding: 110px 80px 80px;
    }
  }
  &_inner {
    @include maxWidth();
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
