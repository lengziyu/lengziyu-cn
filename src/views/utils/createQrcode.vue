<template>
	<div>
		<Header />
		<div class="mainer container">
			<div class="el-back">
				<el-page-header @back="$utils.back" content="二维码生成" />
			</div>
			<div class="compres-main">
				<div class="compres-from">
					<div class="compres-from-item mb-20">
						  <el-tabs v-model="tabValue" @tab-click="tabClick">
							<el-tab-pane label="链接" name="link">
								<el-input placeholder="请输入URL链接" v-model="linkInput">
									
								</el-input>
							</el-tab-pane>
							<el-tab-pane label="文本" name="text">
								<el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textInput">

								</el-input>
							</el-tab-pane>
						  </el-tabs>
					</div>
					<div class="compres-from-item mb-20">
						<el-button type="primary" @click="clickGenerate">立即生成</el-button>
					</div>
					
					<div class="compres-from-item mb-20" v-show="showQrcode">
						  <div class="block mb-20">
						    <el-slider
						      v-model="qrcodeSize"
							  :min="64"
							  :max="640"
							  @change="changeSlider"
						      show-input>
						    </el-slider>
						  </div>
						<div id="qrcode" class="qrcode" ref="qrCodeUrl"></div>
					</div>
					<div class="compres-from-item mb-20" v-show="showQrcode">
						<el-button @click="clickDownLoad" type="success">保存</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QRCode from 'qrcodejs2'

export default {
  components: {
    Header,
	Footer,
  },
  data() {
	return {
		options: [{
			label: '链接',
			value: 'link'
		},{
			label: '文本',
			value: 'text'
		}],
		value: 'link',
		tabValue: 'link',
		showQrcode: false,
		qrcodeSize: 160,
		linkInput: '',
		textInput: ''
		
	}
  },
  mounted() {
	
  },
  computed: {

  },
  methods: {
	  // 点击切换
	  tabClick(e) {
		  this.showQrcode = false;
	  },
	  // 点击生成
	  clickGenerate() {
		  if(this.tabValue == 'link' && !this.linkInput){
			  this.$notify({
				title: '提示',
				message: '请输入链接',
			  });
			  return 
		  }else if(this.tabValue == 'text' && !this.textInput) {
			  this.$notify({
					title: '提示',
					message: '请输入内容',
			  });
			  return
		  }
		  document.getElementById("qrcode").innerHTML = ''
		  var qrcode = new QRCode(this.$refs.qrCodeUrl, {
		  	text: this.tabValue == 'link'?this.linkInput:this.textInput, // 需要转换为二维码的内容
		  	width: this.qrcodeSize,
		  	height: this.qrcodeSize,
		  	colorDark: '#000000',
		  	colorLight: '#ffffff',
		  	correctLevel: QRCode.CorrectLevel.H
		  })
		  this.showQrcode = true;
	  },
	  // 改变二维码大小
	  changeSlider(e) {
		  this.clickGenerate();
	  },
	  clickDownLoad() {
		  let qrcodeImg = document.getElementById("qrcode").querySelector('img').src;
		 this.downLoad('qrcode'+this.qrcodeSize+'x'+this.qrcodeSize, qrcodeImg);
	  },
	  downLoad(downloadName, url) {
		let aLink = document.createElement('a');
		let blob = this.base64ToBlob(url);

		let evt = document.createEvent("HTMLEvents");
		evt.initEvent("click", true, true);//initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
		aLink.download = downloadName;
		aLink.href = URL.createObjectURL(blob);

		aLink.click()
	  },
	   base64ToBlob(code) {
			let parts = code.split(';base64,');
			let contentType = parts[0].split(':')[1];
			let raw = window.atob(parts[1]);
			let rawLength = raw.length;

			let uInt8Array = new Uint8Array(rawLength);

			for (let i = 0; i < rawLength; ++i) {
				uInt8Array[i] = raw.charCodeAt(i);
			}
			return new Blob([uInt8Array], {type: contentType});
		}
  }
}
</script>

<style lang="scss" scoped>
.mainer{
	margin-top: 120px;
	overflow: hidden;
}
.dateItem{
	width: 100%;
	height: 100%;
	display: block;
}
.status-up{
	color: red;
	margin-top: 6px;
}
.status-down{
	color: limegreen;
	margin-top: 6px;
}
.price-dw{
	font-size: 10px;
}
@media (max-width:992px) {
	.container{
		padding: 0;
	}
}
.shouyi{
	padding-left: 15px;
	padding-right: 15px;
	text-align: right;
}
.qrcode{
	margin: 0 auto;
}
</style>

<style lang="scss">
.el-calendar-table .el-calendar-day{
	text-align: center;
	padding: 8px 0 0 0;
}
.el-calendar-table thead th{
	text-align: center;
}
.compres-main{
	max-width: 460px;
	margin: 0 auto;
	margin-top: 80px;
	padding: 0 20px;
}

.compres-from{
	max-width: 420px;
	margin: 0 auto;
}
</style>