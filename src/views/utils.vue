<template lang="html">
  <div class="utils">
    <Header page="utils" />
    <Masthead title="工具" subtitle="Utils" />
    <div class="main container">
		<div class="row">
			<div  v-for="i in list"  class="col-sm-6 col-md-4 col-lg-4 utils-item" @click="clickItem(i)">
				<section id="featured-page-advanced-2" class=" widget featured-content featuredpage">
				    <div class="widget-wrap">
				        <article class="post-230 page type-page status-publish has-post-thumbnail entry"
				        aria-label="Income visas – your opportunity to move abroad">
				            <header class="entry-header">
				                <h4 class="entry-title">
				                    <a target="_self" rel="">
				                        {{ i.title }}
				                    </a>
				                </h4>
				            </header>
				            <a class="aligncenter"
				             aria-hidden="true">
				                <img :src="i.image" class="entry-image max">
				            </a>
				            <div class="entry-content">
				                <p>
				                    {{ i.subtitle }}
				                </p>
				            </div>
				        </article>
				    </div>
				</section>
			</div>
		</div>
    </div>
    <!-- <Footer /> -->
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
  data() {
	  return {
		  list: [{
			  title: 'len-utils',
			  subtitle: 'len-utils 是一个前端业务代码的工具类，旨在提高前端开发效率。常见：日期格式化、正则、数据处理、设置缓存等等，已发布到npm。',
			  image: require('@/assets/images/utils/len-utils.png'),
			  href: 'https://github.com/lengziyu/len-utils'
		  },{
			  title: '压缩图片',
			  subtitle: '用nodejs开发的在线压缩图片工具。通过拖曳压缩，支持png、jpeg、jpg格式。',
			  image: require('@/assets/images/utils/compres.png'),
			  href: '/utils/compres',
		  },{
			  title: '前端导航',
			  subtitle: '前端导航云集高质量前端网站的内容，云集大量前端网站。',
			  image: require('@/assets/images/projects/fenav.jpg'),
			  href: 'http://lengziyu.cn/fenav',
		  },{
			  title: '代码格式化',
			  subtitle: '格式化/压缩html、css、js。',
			  image: require('@/assets/images/utils/format.png'),
			  href: '/utils/format',
		  },{
			  title: '记账本',
			  subtitle: '月度记账单。',
			  image: require('@/assets/images/utils/bookkeeping.png'),
			  href: '/utils/bookkeeping',
		  }]
	  }
  },
  computed: {

  },
  methods:{
	clickItem(i) {
		if(i.href.indexOf('http') != -1){
			window.open(i.href)
		}else{
			this.$router.push(i.href)
		}
		
	}
  }
}
</script>

<style lang="scss" scoped>
.utils{
  .main{
	overflow: hidden;
  }
  .utils-item{
	  padding: 10px;
	  position: relative;
	  cursor: pointer;
	  transition: all .3s;
	  &:hover{
		  transition: all .3s;
		a{
			color: #007bff !important;
		}	
		p{
			color: #777;
		}
	}
  }
}
section{
	padding: 20px;
	padding-bottom: 0px;
	background: #fff;
	box-shadow: 1px 1px 6px #aaa;
	.entry-content {
	    text-align: left;
	    padding: 10px 0;
		height: 120px;
		color: #999;
		font-size: 15px;
	}
	.entry-title{
		text-align: center;
		a{
			color: #666;
			text-decoration: none;
		}
	}
	.entry-image {
	    margin: 10px auto;
	}

}
</style>
