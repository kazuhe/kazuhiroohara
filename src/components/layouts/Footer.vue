<template>
  <footer class="footer">
    <div class="footer_inner">
      <nav class="footer_navi">
        <ul class="footer_navi_list">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/works">Works</router-link></li>
          <li>
            <a href="https://archive.kazuhiroohara.jp/"><Book />Archive</a>
          </li>
          <li>
            <router-link to="/"><Plane />Contact</router-link>
          </li>
          <li>
            <router-link to="/privacypolicy">Privacypolicy</router-link>
          </li>
        </ul>
      </nav>
      <p class="footer_copy">&copy; Kazuhiro Ohara All Right Reserved.</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer'
})
</script>

<style lang="scss">
.footer {
  margin-top: 30px;
  padding: 30px 15px;
  background: $highGray;
  border-bottom: 15px solid $subColor;
  @include mq-up() {
    margin-top: 80px;
    margin-left: 230px;
    padding: 50px 80px;
  }

  &_inner {
    @include maxWidth();
  }
  &_navi {
    max-width: 500px;
    margin: 0 auto;
    &_list {
      display: flex;
      align-items: center;
      justify-content: space-around;
      li {
        a {
          font-size: 1.2rem;
          font-weight: bold;
          @include mq-up() {
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  &_copy {
    margin-top: 15px;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    color: $deepGray;
    @include mq-up() {
      margin-top: 30px;
    }
  }
}
</style>
