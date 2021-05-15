<template lang="html">
  <div class="about">
    <Header page="about" />
    <Masthead title="关于" subtitle="About" />
    <div class="main">
      <div class="group">
		  <div class="group-title">
			  基本信息
		  </div>
		  <div class="group-content">
				<ul>
					<li>昵称：冷子欲<span>（lengziyu）</span></li>
					<li>本名：陈广达</li>
					<li>生日：1月22日</li>
					<li>身高：176cm</li>
					<li>年龄：27岁</li>
					<li>籍贯：广东茂名</li>
					<li>工作地址：广州</li>
					<li>工作年限：6年</li>
				</ul>
		  </div>
	  </div>
	  
	  <div class="group">
	  		  <div class="group-title">
	  			  兴趣爱好
	  		  </div>
	  		  <div class="group-content">
	  				<ul>
	  					<li>汽车相关<span>（飙车、改装、性能等等）</span></li>
						<li>旅游<span>（去的地方不多，今年只想去看看雪）</span></li>
						<li>摄影</li>
						<li>端游<span>（CF）</span></li>
						<li>宠物、小动物</li>
	  				</ul>
	  		  </div>
	  </div>
	  
	  <div class="group">
	  		  <div class="group-title">
	  			  联系方式
	  		  </div>
	  		  <div class="group-content">
	  				<ul>
	  					<li>微信<span>（iilengziyu）</span></li>
						<li>QQ<span>（1058566903）</span></li>
						<li><a target="_blank" href="https://github.com/lengziyu">Github</a></li>
						<li><a target="_blank" href="https://segmentfault.com/u/lengziyu">SegmentFault</a></li>
						<li><a target="_blank" href="mailto:1058566903@qq.com">Email</a></li>
						<li><a target="_blank" href="https://lengziyu.cn">个人网站</a></li>
	  				</ul>
	  		  </div>
	  </div>
	  
	  <div class="group">
	  		  <div class="group-title">
	  			  大概我的人生规划是
	  		  </div>
	  		  <div class="group-content">
	  				<ul>
	  					<li>21岁 ~ 35岁写代码，存钱理财发展副业</li>
						<li>35岁以后自由职业者，在家相妻教子</li>
						<li>50岁孩子大了以后，好好享受人生，环游世界</li>
						<li>70岁如果我还活着，我希望在老家种种菜、养一只狗</li>
	  				</ul>
					<p>总之我就是这么爱幻想……</p>
	  		  </div>
	  </div>
	  <div class="group">
	  		  <div class="group-title">
	  			  至于现状
	  		  </div>
			 <div class="group-content">
				 并不理想
			 </div>
		</div>
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

  }
}
</style>
