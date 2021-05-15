<template lang="html">
  <div class="about">
    <Header page="life" />
    <Masthead title="生活" subtitle="Life" />
    <div class="main">
		<h2 class="life-title">好好生活，热爱生活。</h2>
		<img src="@/assets/images/life-photo.jpg" class="max" alt="">
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
	.life-title{
		text-align: center;
		margin-bottom: 20px;
		font-size: 28px;
	}
  }
}
</style>
