<template>
  <div class="about">
    <Header />
    <div class="about_inner">
      <Breadcrumb :breadcrumbs="breadcrumbs" />
      <Lead
        title="About Us"
        subTitle="Kazuhiro Ohara / 大原 一浩"
        text="2017年からWebデザイナー/フロントエンジニアとして活動しており、これまで数多くの中小企業様のコーポレートサイトやランディングページの制作に携わってきました。ヒアリングからWebサイトワイヤーフレームの作成、コーディングや印刷物の制作まで幅広く経験しています。"
      />
      <Section gray="true">
        <Title h2="Profile" />
        <Profile
          class="about_profile"
          image="profile.jpg"
          name="Kazuhiro Ohara"
          github="https://github.com/kazuhe"
          twitter="https://twitter.com/kazuhiroohara_"
        />
      </Section>
      <Section>
        <Title h2="My History" />
        <Process class="about_process" :processes="processes" />
      </Section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Header from '@/components/layouts/Header.vue'
import Section from '@/components/layouts/Section.vue'
import Breadcrumb from '@/components/modules/Breadcrumb.vue'
import Lead from '@/components/modules/Lead.vue'
import Profile from '@/components/modules/Profile.vue'
import Process from '@/components/modules/Process.vue'
import Title from '@/components/modules/Title.vue'

export default defineComponent({
  name: 'About',
  components: {
    Header,
    Section,
    Breadcrumb,
    Lead,
    Profile,
    Process,
    Title
  },
  setup() {
    const breadcrumbs = reactive({
      about: {
        name: 'About',
        path: '/about'
      }
    })
    const processes = reactive({
      1: {
        day: '2017年8月',
        title: '地元税理士法人を退職.. Webの道へ',
        text:
          '地元である岡山県の税理士法人に勤めていたが、クリエイティブな仕事に憧れてWeb業界へと転向する'
      },
      2: {
        day: '2017年9月 - 2019年12月',
        title: '岡山県の中小企業様向けにWeb制作',
        text:
          'コーポレートサイトやランディングページの制作・チラシやパンフレット等の広告物の制作・既存顧客への営業など、中小企業の販促集客活動を幅広く支援'
      }
    })
    return {
      breadcrumbs,
      processes
    }
  }
})
</script>

<style lang="scss">
.about {
  @include root();
  &_inner {
    @include inner();
    padding: 0 15px;
  }

  &_profile {
    margin-top: 15px;
  }

  &_process {
    margin-top: 30px;
  }
}
</style>
