<template>
  <div class="home">
    <Header />
    <div class="home_inner">
      <Section>
        <Title h2="Archive" p="最新の記事" />
        <Carousel
          class="home_content home_posts"
          :carouselElement="posts.element"
        >
          <Slide v-for="post in posts.data" :key="post.id">
            <a :href="post.link">
              <img :src="post.featured_image.src" alt="" />
              <div class="home_posts_body">
                <div class="home_posts_meta">
                  <p class="home_posts_cat">{{ post.category_name }}</p>
                  <p class="home_posts_date">
                    {{ post.date.substring(0, 10) }}
                  </p>
                </div>
                <h3>{{ post.title.rendered }}</h3>
                <Button class="home_posts_button" text="Learn more" />
              </div>
            </a>
          </Slide>
        </Carousel>
      </Section>
      <Section>
        <Title h2="Works" p="個人開発での制作実績" />
        <p>
          munimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimunimuni
        </p>
      </Section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import Section from '@/components/layouts/Section.vue'
import Carousel from '@/components/modules/Carousel.vue'
import Slide from '@/components/modules/Slide.vue'
import Title from '@/components/modules/Title.vue'
import Button from '@/components/modules/Button.vue'
import axios from 'axios'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    Footer,
    Section,
    Carousel,
    Slide,
    Title,
    Button
  },
  setup() {
    const posts = reactive({
      element: 10,
      data: []
    })
    onMounted(() => {
      axios
        .get('https://archive.kazuhiroohara.jp/wp-json/wp/v2/posts?_embed')
        .then(response => {
          posts.data = response.data
          console.log(response.data)
        })
        .catch(response => console.log(response))
    })

    return { posts }
  }
})
</script>

<style lang="scss">
.home {
  @include root();
  &_inner {
    @include inner();
  }

  &_content {
    margin-top: 15px;
    @include mq-md() {
      margin-top: 30px;
    }
  }

  &_posts {
    a {
      text-decoration: none;
      color: $textColor;
    }
    h3 {
      margin-top: 10px;
      line-height: 1.4;
    }
    img {
      width: 100%;
    }
    &_body {
      padding: 15px;
    }
    &_meta {
      display: flex;
      align-items: center;
    }
    &_cat {
      padding: 0 10px;
      background: $mainColor;
      color: #fff;
      border-radius: 50px;
      font-size: 1.2rem;
      font-weight: 700;
    }
    &_date {
      font-size: 1.1rem;
      margin-left: 10px;
      font-weight: 700;
      color: $deepGray;
    }
    &_button {
      margin-top: 10px;
    }
  }
}
</style>
