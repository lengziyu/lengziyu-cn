<template>
	<div>
		<Header />
		<div class="main container">
			<div class="compres-main">
				<div class="compres-from">
					<div class="compres-from-item">
						<el-input placeholder="请输入质量(数值)" v-model="quality">
							<template slot="prepend">质量</template>
						</el-input>
						<p class="input-tips">数值越大，图片质量越高，体积越大，默认50。</p>
					</div>
					
					<div class="compres-from-item mb-20">
						<el-switch
						  v-model="isSetWH"
						  inactive-text="设置宽高">
						</el-switch>
					</div>
					
					<div class="compres-from-item" v-show="isSetWH">
						<el-input placeholder="请输入宽度(可不填)" v-model="width">
							<template slot="prepend">宽度</template>
							<template slot="append">px</template>
						</el-input>
						<p class="input-tips">设置图片宽度。</p>
					</div>
					<div class="compres-from-item" v-show="isSetWH">
						<el-input placeholder="请输入高度(可不填)" v-model="height">
							<template slot="prepend">高度</template>
							<template slot="append">px</template>
						</el-input>
						<p class="input-tips">如果height未指定，则根据当前宽高等比缩放。</p>
					</div>
					
					<div class="compres-from-item mb-20">
						<el-switch
						  v-model="isSetWatermark"
						  inactive-text="添加水印">
						</el-switch>
					</div>
					
					<div class="compres-from-item" v-show="isSetWatermark">
						<div class="compres-from-item-wrap">
							<div class="compres-from-title">
								水印图片
							</div>
							<div class="compres-from-value">
								<el-upload
								  class="upload-demo"
								  :action="$variables.requestUrl+'/api/compresImages'"
								  :on-preview="handlePreview"
								  :on-remove="handleRemove"
								  :before-remove="beforeRemove"
								  multiple
								  :limit="1"
								  :on-exceed="handleExceed"
								  :file-list="fileList">
								  <el-button size="small" type="primary">点击上传</el-button>
								</el-upload>
							</div>
						</div>
					</div>
					
					<div class="compres-from-item mt-10" v-show="isSetWatermark">
						<div class="">
							水印位置
						</div>
						<div class="mt-10">
							<el-radio v-model="watermarkPos" label="1">右下</el-radio>
							<el-radio v-model="watermarkPos" label="2">右上</el-radio>
							<el-radio v-model="watermarkPos" label="3">中间</el-radio>
							<el-radio v-model="watermarkPos" label="4">左下</el-radio>
							<el-radio v-model="watermarkPos" label="5">左上</el-radio>
						</div>
					</div>
					
					<div class="compres-from-item mt-10" v-show="isSetWatermark">
						<div class="">
							水印尺寸
						</div>
						<div class="mt-10 set-size-wrap">
							<div class="set-size">
								<el-input placeholder="可不填" v-model="watermarkWidth">
									<template slot="prepend">宽度</template>
									<template slot="append">px</template>
								</el-input>
							</div>
							<div class="set-size">
								<el-input placeholder="可不填" v-model="watermarkHight">
									<template slot="prepend">高度</template>
									<template slot="append">px</template>
								</el-input>
							</div>
						</div>
						<p class="input-tips">如果height未指定，则根据当前宽高等比缩放。</p>
					</div>
				</div>
				
				<div class="compres-upload">
					<input ref="uploadInputEl" type="file" multiple="multiple" @change="changeFile">
					<img src="@/assets/images/download.png" alt="">
					<p>
						请把jpg、png文件拖进这里。
						<div class="upload-tips">注：文件、文件夹均可。</div>
					</p>
				</div>
				
				<p class="btn-hldr file-download"> 
				
				<a class="main-btn email-lnk wow headShake">
					<i class="el-icon-download"></i>
					立即下载
				</a> 
				</p>
			</div>
		</div>
		<Footer/>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { compresImages } from '@/api/compres.js'
export default {
  components: {
    Header,
	Footer
  },
  data() {
	  return {
		quality: 50,
		isSetWH: false,
		width: '',
		height: '',
		isSetWatermark: false,
		watermarkPos: '1',
		watermarkHight: '',
		watermarkWidth: ''
	  }
  },
  methods: {
	  compresImages() {
		  console.log(this.$refs.uploadInputEl.files[0])
		  var formData = new FormData();
		  formData.append('quality', this.quality);
		  // formData.append('linkId',this.addId);
		  // formData.append('rfilename',this.addFileName);
		  for(var i = 0;i<this.$refs.uploadInputEl.files.length;i++){
			  formData.append('file', this.$refs.uploadInputEl.files[i]);
		  }
		  // {
		  // 			  file: this.$refs.uploadInputEl.files[0],
		  // 			  quality: this.quality,
		  // 			  isSetWH: this.isSetWH,
		  // 			  width: this.width,
		  // 			  height: this.height,
		  // 			  isSetWatermark: this.isSetWatermark,
		  // 			  watermarkPos: this.watermarkPos,
		  // 			  watermarkHight: this.watermarkHight,
		  // 			  watermarkWidth: this.watermarkWidth
		  // }
		  compresImages(formData).then(res=>{
			  console.log(res)
		  })
	  },
	  changeFile(e) {
		  this.compresImages();
	  }
  }
}
</script>

<style lang="scss" scoped>
.main{
	overflow: hidden;
}
.compres-main{
	max-width: 460px;
	margin: 0 auto;
	margin-top: 80px;
}

.compres-from{
	max-width: 420px;
	margin: 0 auto;
}
.input-tips,.upload-tips{
	color: #f56c6c;
	// color: #aaa;
	font-size: 13px;
	text-align: right;
	margin-top: 6px;
}
.upload-tips{
	text-align: center;
	font-size: 15px;
	margin-top: -6px;
}
.compres-upload{
	border: .2rem dashed #aaa;
	border-radius: 1.5rem;
	cursor: pointer;
	max-width: 420px;
	height: 200px;
	margin: 0 auto;
	margin-top: 30px;
	overflow: hidden;
	text-align: center;
	position: relative;
	img{
		max-width: 70px;
		margin-top: 32px;
	}
	p{
		margin-top: 10px;
		color: #666;
		font-size: 16px;
	}
	input{
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
}
.compres-from-item-wrap{
	overflow: hidden;
}
.compres-from-item{
	.compres-from-title{
		float: left;
	}
	.compres-from-value{
		float: left;
		margin-left: 6px;
	}
}
.set-size-wrap{
	overflow: hidden;
	.set-size{
		width: 48%;
		float: left;
		margin-right: 2%;
	}
}
.file-download{
	.main-btn{
		width: 92%;
	}
}
</style>
