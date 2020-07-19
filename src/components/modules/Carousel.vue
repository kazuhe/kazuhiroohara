<template>
  <div ref="root" class="carousel">
    <ul
      ref="wrap"
      class="carousel_list"
      :style="{
        transform: `translate(${getOffset}px, 0)`,
        'flex-basis': `${carousel.carouselWidth}px`
      }"
    >
      <slot></slot>
    </ul>
    <ul class="carousel_navi">
      <li v-for="(navi, index) in carousel.element" :key="index">
        <button :class="{ '-current': getCurrentNavi(index) }" />
      </li>
    </ul>
    <div class="carousel_btn">
      <div class="carousel_btn_prev" @click="prevSlide"><Arrow /></div>
      <div class="carousel_btn_next" @click="nextSlide"><Arrow /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from 'vue'
import Arrow from '@/components/svg/Arrow.vue'

export default defineComponent({
  name: 'Carousel',
  components: { Arrow },
  props: {
    carouselElement: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const wrap = ref() // カルーセルのDOMを取得
    const carousel = reactive({
      current: 0,
      element: props.carouselElement,
      carouselWidth: 0,
      offset: 0
    })

    // カルーセルの横幅を取得
    let timeoutId: number
    onMounted(() => {
      carousel.carouselWidth = wrap.value.offsetWidth
      window.addEventListener('resize', () => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          carousel.carouselWidth = wrap.value.offsetWidth
          console.log('resize!')
        }, 500)
      })
    })

    // カルーセルのオフセットを指定
    const getOffset = computed(() => {
      return carousel.carouselWidth * carousel.current * -1
    })

    // カルーセルのボタンメソッド
    const prevSlide = (): void => {
      if (carousel.current > 0) {
        --carousel.current
      }
    }
    const nextSlide = (): void => {
      if (carousel.current < carousel.element - 1) {
        ++carousel.current
      }
    }

    // カルーセルのカレントナビを取得
    const getCurrentNavi = (index: number) => {
      if (carousel.current === index) {
        return true
      }
    }

    // スマホスワイプ機能
    const swipe = (target: HTMLElement) => {
      let startX = 0
      let moveX = 0
      target.addEventListener('touchstart', (e: TouchEvent) => {
        e.preventDefault()
        startX = e.touches[0].pageX
      })
      target.addEventListener('touchmove', (e: TouchEvent) => {
        e.preventDefault()
        moveX = e.changedTouches[0].pageX
      })
      target.addEventListener('touchend', () => {
        if (carousel.current < carousel.element - 1 && startX > moveX + 30) {
          ++carousel.current
        } else if (carousel.current > 0 && startX + 30 < moveX) {
          --carousel.current
        }
      })
    }
    const root = ref()
    onMounted(() => {
      swipe(root.value)
    })

    return {
      carousel,
      prevSlide,
      nextSlide,
      getOffset,
      getCurrentNavi,
      wrap,
      swipe,
      root
    }
  }
})
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  overflow: hidden;
  &_list {
    display: flex;
    transition: all 0.2s ease;
  }

  &_navi {
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    li {
      padding: 0 10px;
      button {
        width: 7px;
        height: 7px;
        background-color: $trueGray;
        border-radius: 50%;
        &.-current {
          background-color: $mainColor;
        }
      }
    }
  }

  &_btn {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 50%;
    bottom: 50%;
    width: 100%;
    padding: 0 15px;
    &_prev,
    &_next {
      background-color: rgba(255, 255, 255, 0.7);
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        width: 10px;
        fill: $mainColor;
      }
    }
    &_prev {
      svg {
        transform: rotate(90deg);
      }
    }
    &_next {
      svg {
        transform: rotate(270deg);
      }
    }
  }
}
</style>
