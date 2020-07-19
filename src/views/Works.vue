<template>
  <div class="works">
    <Header />
    <div class="works_inner">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <Lead
        title="Works"
        subTitle="個人開発での制作実績"
        text="積極的にモダンな技術に挑戦することを目的に個人開発に取り組んでいます。今まで作成したWebサイトやWebアプリを紹介しています。"
        image="works.jpg"
      />
      <Section>
        <div class="works_flex">
          <Carousel :carouselElement="carousel.element">
            <Slide>
              <img src="@/assets/img/pages/works/observable01.jpg" alt="" />
            </Slide>
            <Slide>
              <img src="@/assets/img/pages/works/observable02.jpg" alt="" />
            </Slide>
            <Slide>
              <img src="@/assets/img/pages/works/observable03.jpg" alt="" />
            </Slide>
            <Slide>
              <img src="@/assets/img/pages/works/observable04.jpg" alt="" />
            </Slide>
          </Carousel>
          <div class="works_content">
            <Title h2="observable" p="タスク管理カレンダー" />
          </div>
        </div>
      </Section>
      <Section :gray="true">
        <Title h2="observable" p="タスク管理カレンダー" />
        <p class="works_content">
          私が最も大事にしている「コト」は人を想いやり尊重するコトです。
          人とは、クライアントはもちろん共に働く仲間やターゲットとするユーザー全てを意味しています。人を想い行動することでよりよいサービスを提供することができ、自分自身も成長できると考えます。
        </p>
      </Section>
      <Section>
        <Title h2="My History" p="簡単な職歴" />
      </Section>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import Section from '@/components/layouts/Section.vue'
import Breadcrumb from '@/components/modules/Breadcrumb.vue'
import Lead from '@/components/modules/Lead.vue'
import Title from '@/components/modules/Title.vue'
import Carousel from '@/components/modules/Carousel.vue'
import Slide from '@/components/modules/Slide.vue'

export default defineComponent({
  name: 'Works',
  components: {
    Header,
    Footer,
    Section,
    Breadcrumb,
    Lead,
    Title,
    Carousel,
    Slide
  },
  setup() {
    const carousel = reactive({
      element: 4
    })
    const breadcrumbs = reactive({
      works: {
        name: 'Works',
        path: '/works'
      }
    })
    const processes = reactive({
      1: {
        day: '2017年8月',
        title: '地元税理士法人を退職.. Webの道へ',
        text:
          '地元岡山県の税理士法人に勤めていたが、クリエイティブな仕事に憧れてWeb業界へと転向する'
      },
      2: {
        day: '2017年9月 - 2019年12月',
        title: '中小企業向けにWeb制作',
        text:
          '岡山県の4~5人規模のWeb制作会社に勤務。コーポレートサイトやランディングページの制作・チラシやパンフレット等の広告物の制作など、中小企業の販促集客活動を幅広く支援。Webサイト制作の基礎とディレクションを経験。'
      },
      3: {
        day: '2019年12月 -',
        title: '深い技術を身に付けるため東京へ',
        text:
          '大規模なWebサイト制作・運用やWebアプリ開発を経験したいと考え上京。上場企業もクライアントにもつ社員数150人~の都内受託開発会社に就職し、現在進行形で成長中。'
      }
    })
    const lists = reactive({
      1: 'HTML・Pug / CSS・Sass / JavaScript（ES6以降）を利用したWebサイト開発',
      2: 'Webpackを用いた開発環境の構築運用経験',
      3: 'Vue（2系 / 3系α）を利用したWebアプリ開発',
      4: 'SPAの実装',
      5: 'TypeScriptでの開発',
      6: 'Gitを利用した開発',
      7: 'ディレクション業務（4~5人の小規模チーム）'
    })
    return {
      breadcrumbs,
      processes,
      carousel,
      lists
    }
  }
})
</script>

<style lang="scss">
.works {
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

  &_flex {
    @include mq-lg() {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: -15px;
      margin-right: -15px;
      > div,
      > ul {
        width: 50%;
        margin: 0 15px;
      }
    }
  }
}
</style>
