<template>
  <header class="header">
    <div class="header_inner">
      <div class="header_logo">
        <router-link to="/"><Logo /></router-link>
      </div>
      <div @click="toggleHeader" class="header_button"><Menu /></div>
      <nav class="header_navi" :class="{ '-open': headerMenu }">
        <ul class="header_navi_list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/">Works</router-link></li>
          <li>
            <router-link to="/"><Book />Archive</router-link>
          </li>
          <li>
            <router-link to="/"><Plane />Contact</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header_sns">
      <a
        href="https://twitter.com/kazuhiroohara_"
        target="_blank"
        rel="nofollow"
      >
        <Twitter />
      </a>
      <a href="https://github.com/kazuhe" target="_blank" rel="nofollow">
        <Github />
      </a>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Logo from '@/components/svg/Logo.vue'
import Menu from '@/components/svg/Menu.vue'
import Twitter from '@/components/svg/Twitter.vue'
import Github from '@/components/svg/Github.vue'
import Book from '@/components/svg/Book.vue'
import Plane from '@/components/svg/Plane.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Logo,
    Menu,
    Twitter,
    Github,
    Book,
    Plane
  },
  setup() {
    /*
     * Defines headerMenu
     */
    const headerMenu = ref(false)
    const toggleHeader = () => {
      headerMenu.value = !headerMenu.value
    }
    return {
      headerMenu,
      toggleHeader
    }
  }
})
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 60px;
  background: $subColor;
  padding: 0 15px;
  z-index: 1;
  @include mq-up() {
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 100vh;
  }

  &_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @include mq-up() {
      display: block;
    }
  }

  &_logo {
    svg {
      display: block;
      width: 100px;
      margin: 0 auto;
      fill: #fff;
      @include mq-up() {
        width: 120px;
      }
    }
  }

  &_button {
    position: relative;
    width: 17px;
    cursor: pointer;
    svg {
      display: block;
      fill: #fff;
    }
    @include mq-up() {
      display: none;
    }
  }

  &_navi {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: $subColor;
    padding: 0 15px;
    display: none;
    @include mq-up() {
      display: block;
      position: relative;
      top: 30px;
    }
    &.-open {
      display: block;
    }
    &_list {
      margin: 8px 0 5px;
      li {
        padding: 13px 0;
        border-top: 1px solid $deepGray;
        @include mq-up() {
          border-top: none;
          text-align: center;
        }
        a {
          display: flex;
          align-items: center;
          color: #fff;
          font-size: 15px;
          font-weight: bold;
          @include mq-up() {
            display: inline;
            color: $deepGray;
            &.router-link-active {
              color: #fff;
            }
          }
          svg {
            display: block;
            width: 15px;
            margin-right: 10px;
            fill: #fff;
            @include mq-up() {
              display: none;
            }
          }
        }
      }
    }
  }

  &_sns {
    position: absolute;
    height: 60px;
    top: 0;
    right: 45px;
    display: flex;
    align-items: center;
    a {
      padding: 0 10px;
    }
    svg {
      display: block;
      fill: $trueGray;
      width: 20px;
      cursor: pointer;
    }
    @include mq-up() {
      justify-content: center;
      position: absolute;
      top: auto;
      bottom: 0;
      left: 0;
      right: auto;
      width: 100%;
    }
  }
}
</style>
