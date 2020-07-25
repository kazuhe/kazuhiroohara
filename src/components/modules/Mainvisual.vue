<template>
  <div ref="root" class="mainvisual" v-cloak>
    <ul
      ref="wrap"
      class="mainvisual_list"
      :style="{
        transform: `translate(${getOffset}px, 0)`,
        'flex-basis': `${mainvisual.imageWidth}px`
      }"
    >
      <li
        v-for="(image, index) in mainvisual.images"
        :key="index"
        class="mainvisual_item"
        :class="{ '-current': getCurrent(index) }"
      >
        <img :src="image" alt="" />
      </li>
    </ul>
    <div class="mainvisual_wrap">
      <div class="mainvisual_text">
        <h1>THE TRANSFORM BRANDS<br />FROM THE INSIDE OUT.</h1>
        <p>By Kazuhiro Ohara</p>
      </div>
      <ul class="mainvisual_navi">
        <li v-for="(navi, index) in mainvisual.images" :key="index">
          <Circle :class="{ '-current': getCurrent(index) }" />
          <button :class="{ '-current': getCurrent(index) }" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from 'vue'
import Circle from '@/components/svg/Circle.vue'

export default defineComponent({
  name: 'Mainvisual',
  components: { Circle },
  setup() {
    const wrap = ref()
    const mainvisual = reactive({
      current: 0,
      imageWidth: 0,
      offset: 0,
      images: [
        require('@/assets/img/pages/about/about.jpg'),
        require('@/assets/img/pages/works/works.jpg'),
        require('@/assets/img/pages/privacypolicy/privacypolicy.jpg')
      ]
    })

    // 画像の横幅を取得
    let timeoutId: number
    onMounted(() => {
      mainvisual.imageWidth = wrap.value.offsetWidth
      window.addEventListener('resize', () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          mainvisual.imageWidth = wrap.value.offsetWidth
        }, 500)
      })
    })

    // 画像のオフセットを指定
    const getOffset = computed(() => {
      return mainvisual.imageWidth * mainvisual.current * -1
    })

    // 次の画像へオートスライド
    const nextImage = (): void => {
      if (mainvisual.current < mainvisual.images.length - 1) {
        ++mainvisual.current
      } else {
        mainvisual.current = 0
      }
    }
    onMounted(() => {
      setInterval(() => {
        nextImage()
      }, 8000)
    })

    // スライドナビのカレントを取得
    const getCurrent = (index: number) => {
      if (mainvisual.current === index) {
        return true
      }
    }

    return {
      getOffset,
      getCurrent,
      wrap,
      mainvisual
    }
  }
})
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
.mainvisual {
  position: relative;
  overflow: hidden;
  height: 350px;
  @include mq-md() {
    margin-left: 230px;
    height: 500px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  }

  &_list {
    position: relative;
    display: flex;
    height: 350px;
    @include mq-md() {
      height: 500px;
    }
  }

  &_item {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &.-current {
      img {
        animation: grow 15s linear infinite;
      }
      @keyframes grow {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.2);
        }
      }
    }
  }

  &_wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @include mq-md() {
      padding: 0 80px;
    }
  }

  &_text {
    @include maxWidth();
    position: absolute;
    bottom: 30px;
    left: 15px;
    z-index: 1;
    @include mq-md() {
      bottom: 50px;
      left: 80px;
      right: 80px;
    }
    h1 {
      color: #fff;
      line-height: 1.1;
      br {
        display: none;
        @include mq-md() {
          display: block;
        }
      }
    }
    p {
      color: $trueGray;
      font-weight: 600;
      margin-top: 15px;
      line-height: 1;
    }
  }

  &_navi {
    position: absolute;
    right: 30px;
    bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 20px;
      button {
        width: 7px;
        height: 7px;
        background-color: $trueGray;
        border-radius: 50%;
        &.-current {
          background-color: $mainColor;
        }
      }
      svg {
        position: absolute;
        width: 25px;
        transform: rotate(-90deg);
        circle {
          fill: none;
          stroke-width: 3px;
          stroke: $mainColor;
          opacity: 1;
          stroke-dasharray: 140;
          stroke-dashoffset: 140;
          will-change: stroke-dashoffset;
        }
        &.-current {
          circle {
            animation: load 8s linear infinite reverse;
          }
        }
        @keyframes load {
          0% {
            stroke-dashoffset: 0;
          }
        }
      }
    }
  }
}
</style>
