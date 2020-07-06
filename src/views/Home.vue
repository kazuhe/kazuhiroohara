<template>
  <div class="home">
    <Header />
    <div class="home_inner">
      <p>
        munimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimuni
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Header from '@/components/layouts/Header.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Header
  },
  setup() {
    const breadcrumbs = reactive({
      home: {
        name: 'ほげ',
        path: '/hoge'
      },
      about: {
        name: 'nubi',
        path: '/hoge'
      }
    })
    return {
      breadcrumbs
    }
  }
})
</script>

<style lang="scss">
.home {
  @include root();
  &_inner {
    @include inner();
  }
}
</style>
