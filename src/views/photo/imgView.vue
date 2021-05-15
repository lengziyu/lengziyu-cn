<template>
	<div class="img-view">
		<el-carousel @change="changeCarousel" :interval="5000" :arrow="arrow" :height="height+'px'" :indicator-position="indicator">
		  <el-carousel-item class="pic-item" v-for="item in imgList" :key="item" @click.native="$router.go(-1)">
		    <div class="pic">
				  <img :src="item.img">
			  </div>
		  </el-carousel-item>
		</el-carousel>
		
		<div class="downloadBtn btn-feed-color" @click="clickDownLoad()">
			<i class="el-icon-download"></i>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				height: '',
				imgList: [],
				arrow: 'never',
				indicator: 'none',
				currentIdx: 0
			}
		},
		mounted() {
			this.imgList = this.$utils.getStorage('imgView');
			this.arrow = this.imgList.length>1?'always':'never';
			this.indicator = this.imgList.length>1?'outside':'none';
			this.height = document.body.clientHeight;
			window.addEventListener('resize', ()=> {
				this.height = document.body.clientHeight;
			})
			
		},
		methods: {
			/**
			* 获取图片的 base64 编码 DataURL
			*/
			getImageDataURL(image) {
			    // 创建画布
			    const canvas = document.createElement('canvas');
			    canvas.width = image.width;
			    canvas.height = image.height;
			    const ctx = canvas.getContext('2d');
			    // 以图片为背景剪裁画布
			    ctx.drawImage(image, 0, 0, image.width, image.height);
			    // 获取图片后缀名
			    const extension = image.src.substring(image.src.lastIndexOf('.') + 1).toLowerCase();
			    // 某些图片 url 可能没有后缀名，默认是 png
			    return canvas.toDataURL('image/' + extension, 1);
			},
			downLoad(downloadName, url) {
			    const tag = document.createElement('a');
			    // 此属性的值就是下载时图片的名称，注意，名称中不能有半角点，否则下载时后缀名会错误
			    tag.setAttribute('download', downloadName);
			
			    const image = new Image();
			    // 设置 image 的 url, 添加时间戳，防止浏览器缓存图片
			    image.src = url + '?time=' + new Date().getTime();
			    //重要，设置 crossOrigin 属性，否则图片跨域会报错
			    image.setAttribute('crossOrigin', 'Anonymous');
			    // 图片未加载完成时操作会报错
			    image.onload = () => {
			        tag.href = this.getImageDataURL(image);
			        tag.click();
			    };
			},
			// 截取图片名称
			getFileName(name){ // 获取到文件名
			    let pos = name.lastIndexOf('\/'); // 查找最后一个/的位置
			    return name.substring(pos + 1); // 截取最后一个/位置到字符长度，也就是截取文件名
			},
			clickDownLoad() {
				this.downLoad(this.imgList[this.currentIdx].name, this.imgList[this.currentIdx].img)
			},
			changeCarousel(i) {
				this.currentIdx = i;
			}
			
		}
	}
</script>
<style lang="scss">
	html, body{
		height: 100vh !important;
	}
	.el-carousel__arrow{
		background-color: rgba(255,255,255,.21);
	}
	.el-carousel__indicators--outside{
		bottom: 40px;
		position: absolute;
	}
	.el-carousel__indicator--horizontal{
		width: 14px !important;
		height: 14px !important;
		border-radius: 50% !important;
		padding: 0 !important;
		margin-right: 10px;
		.el-carousel__button{
			width: 14px !important;
			height: 14px !important;
			border-radius: 50% !important;
		}
	}
</style>
<style lang="scss" scoped>
.img-view{
	width: 100%;
	height: 100%;
	background-color: #000;
}
.downloadBtn{
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 10px;
	background-color: #fff;
	border-radius: 50%;
	font-size: 20px;
	font-weight: bold;
	width: 40px;
	height: 40px;
	line-height: 20px;
	z-index: 99;
	&hover{
		opacity: .6;
	}
}
.pic{
	transform: translate(-50%,-50%);
	position: absolute;
	left: 50%;
	top: 50%;
	img{
		max-width: 100%;
	}
}
</style>