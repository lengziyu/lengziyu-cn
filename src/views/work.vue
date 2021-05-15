<template lang="html">
  <div class="about">
    <Header page="work" />
    <Masthead title="工作" subtitle="Work" />
    <div class="main">

    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Masthead from '@/components/Masthead'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Masthead,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.about{
  .main{
    height: 400px;
  }
}
</style>
