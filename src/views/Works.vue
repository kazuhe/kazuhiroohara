<template>
  <div class="works">
    <Header />
    <div class="works_inner">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <Lead
        title="Works"
        subTitle="個人開発での制作実績"
        text="積極的にモダンな技術に触れることを目的に個人開発に取り組んでいます。簡易ではありますが今まで作成したWebサイトやWebアプリを紹介しています。"
        image="pages/works/works.jpg"
      />
      <Section>
        <Title h2="observable" p="タスク管理カレンダー" />
        <div class="works_flex">
          <Carousel class="works_content" :carouselElement="carousel.element">
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
            <p>
              仕事でのスケジュール管理を目的にVue.jsの2系を使用して制作しました。勉強も兼ねてTypeScriptも導入しており、アプリ内の各案件のデータはFirebaseを使って管理しています。カレンダーの描画に苦戦しました。
            </p>
            <Link github="https://github.com/kazuhe/observable" />
          </div>
        </div>
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
import Link from '@/components/modules/Link.vue'

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
    Slide,
    Link
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
        margin-left: 15px;
        margin-right: 15px;
      }
    }
  }
}
</style>
