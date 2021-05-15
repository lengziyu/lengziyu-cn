<template lang="html">
  <div class="about">
    <Header page="photo" />
    <Masthead title="相册" subtitle="Photo" />
    <div class="main">
		<div class="group-photo" v-for="i in list">
			<div class="gp-title">
				{{ i.name }}
			</div>
			<div class="gp-wrap">
				<div class="pic-item" @click="clickImgView(i.list)" v-for="(a,aIdx) in i.list" v-if="aIdx < 3"
					:style="'transform: rotate('+ randomNum(5, 40) +'deg)'">
					<img :src="a.img" class="max" />
				</div>
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
import list from '@/assets/json/photo.js'
export default {
  components: {
    Header,
    Masthead,
    Footer,
  },
  data() {
	  return {
		  list: list
	  }
  },
  computed: {

  },
  methods:{
	  randomNum(minNum, maxNum){ 
	      switch(arguments.length){ 
	          case 1: 
	              return parseInt(Math.random()*minNum+1,10); 
	          break; 
	          case 2: 
	              return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
	          break; 
	              default: 
	                  return 0; 
	              break; 
	      } 
	  },
	  clickImgView(list) {
		  this.$utils.setStorage('imgView', list);
		  setTimeout(()=>{
		  	this.$router.push('/photo/imgView');
		  }, 50)
	  },
  }
}
</script>

<style lang="scss" scoped>
.about{
  .main{
	overflow: hidden;
  }
}
.group-photo{
	float: left;
	width: 28%;
	margin: 2.3%;
	.gp-title{
		text-align: center;
		font-size: 20px;
	}
	.gp-wrap{
		width: 200px;
		height: 200px;
		background-color: #fff;
		margin: 0 auto;
		margin-top: 60px;
		margin-bottom: 20px;
		position: relative;
		.pic-item{
			position: absolute;
			top: 0;
			left: 0;
			img{
				width: 180px;
				height: 180px;
				cursor: pointer;
				border: 4px solid rgba($color: #000000, $alpha: .1);
				opacity: .9;
			}
		}
	}
}
@media (max-width: 900px) {
	.group-photo{
		width: 45%;
	}
}
@media (max-width: 600px) {
	.group-photo{
		width: 94%;
	}
}

/*图片预览 缩略图*/
.preview figure {
  float: left;
  width: 30%;
  height:calc(30vw - 0px);
  margin: 1.5%;
}

.preview figure img {
  width: 100%;
}
</style>
