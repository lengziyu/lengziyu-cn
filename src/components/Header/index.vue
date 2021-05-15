<template lang="html">
  <header id="header" class="header header--fixed hide-from-print">
    <div class="container">
      <h1 id="header-logo" class="image-text"> <a href="/"> <span class="mask"></span> <span class="behind"></span>
        <img class="max" src="@/assets/images/logo.png" alt="">
       </a> 
	  </h1>
	  <div class="icon-nav" v-if="isMobile" @click="isShowNav = true">
		  <img class="max" src="@/assets/images/icon-nav.png">
	  </div>
      <nav id="top-nav" :class="isMobile?'isMobile':''" v-if="isShowNav">
       <ul class="nav-list transistion">
        <li :class="page == i.key?'page-active':''" v-for="(i, idx) in list" :key="idx"><a :href="i.url">{{ i.name }}</a></li>
       </ul>
      </nav>
	  <div class="close-nav" v-show="isMobile && isShowNav" @click="isShowNav = false">
		  <img class="max" src="@/assets/images/icon-close.png">
	  </div>
    </div>
  </header>
</template>

<script>
import Headroom from 'headroom.js'
export default {
	props: ['page'],
  data() {
  	return {
  		isMobile: false,
		screenWidth: '',
		isShowNav: false,
		list: [{
			name: '工具',
			key: 'utils',
			url: '/utils',
		},{
			name: '生活',
			key: 'life',
			url: '/life',
		},{
			name: '相册',
			key: 'photo',
			url: '/photo',
		},{
			name: '关于',
			key: 'about',
			url: '/about',
		},{
			name: '博客',
			key: 'blog',
			url: 'http://lengziyu.cn/blog',
		}]
  	}
  },
  mounted() {
    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 5,
        offset : 205,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        },
    });
    header.init();
	
	// 屏幕小时
	this.getScreenWidth();
	window.addEventListener('resize', ()=> {
		this.getScreenWidth();
	})

  },
  methods: {
	  getScreenWidth() {
		  window.screenWidth = document.body.clientWidth;
		  this.screenWidth = window.screenWidth;
		  if(this.screenWidth < 600){
		  	this.isMobile = true;
			this.isShowNav = false;
		  }else{
		  	this.isMobile = false;
			this.isShowNav = true;
		  }
	  }
  }
}
</script>

<style lang="scss" scoped>
#header{
  background-color: #e0ebe8;
  height: 100px;
  line-height: 70px;
  #header-logo{
    float: left;
    width: 120px;
  }
  #top-nav{
    float: right;
    li{
      float: left;
      margin-left: 30px;
      font-size: 16px;
    }
	.page-active{
		a{
			color: #007bff !important;
		}
	}
  }
  #top-nav.isMobile{
	background-color: rgba(255,255,255,0.9);
	position: fixed;
	margin-left: 0;
	width: 100%;
	left: 0;
	ul{
		margin-bottom: 0;
	}
	li{
		float: none;
		margin-left: 0;
		padding-left: 30px;
		border-bottom: 1px solid rgba($color: #999999, $alpha: .2);
		a{
			display: block;
			width: 100%;
		}
	}
  }
}
.close-nav{
	position: fixed;
	right: 20px;
	top: 0px;
	width: 40px;
	z-index: 999;
	img{
		vertical-align: middle;
	}
}
  .icon-nav{
	  float: right;
	  width: 40px;
  }
.header--fixed {
  position: fixed;
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
}
.animated {
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
}
</style>
