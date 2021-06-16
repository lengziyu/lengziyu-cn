<template>
	<div>
		<Header />
		<div class="mainer container">
			<div class="el-back">
				<el-page-header @back="$utils.back" content="记账本" />
			</div>
			<div class="shouyi">
				<p>总收益：<span :class="totalAmtStatus == '1'?'status-up':'status-down'"><span class="price-dw">￥</span>{{ totalAmt }}</span></p>
				<p>
					当月累计收益：<span :class="currentAmtStatus == '1'?'status-up':'status-down'">
						<span class="price-dw">￥</span>{{ currentAmt }}
					</span>，收益率：<span class="status-up">10%</span>
				</p>
			</div>
			<el-calendar v-model="value" ref="calendarEl">
				<template
				slot="dateCell"
				slot-scope="{date, data}">
				
					<div :class="data.isSelected?'dateItem is-selected':'dateItem'" @click="clickDate(data)">
						
						{{ addDateAmt(date, data) }}
						<div v-for="a in dataList" v-if="a.date == data.day && a.amt" 
						:class="a.status == '1'?'status-up':'status-down'">
							<span class="price-dw">{{ a.status == '1'?'+':'-' }}</span>{{ a.amt }}
						</div>
					</div>
				</template>
			</el-calendar>
		</div>
		<!-- <Footer/> -->
		
		<el-dialog
		  title="当天战况"
		  :visible.sync="editAmtvisible"
		  width="320px">
		  <div>
			  <el-radio v-model="statusAmt" label="1">涨</el-radio>
			  <el-radio v-model="statusAmt" label="2">跌</el-radio>
		  </div>
		  <br>
		  <el-input v-model="inputAmt" placeholder="请输入金额"></el-input>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="editAmtvisible = false">取 消</el-button>
		    <el-button type="primary" @click="clickEditAmt">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
	Footer,
  },
  data() {
	return {
		value: new Date(),
		schedule: '',
		formatSchedule: ['2'],
		dataList: [],
		editAmtvisible: false,
		inputAmt: '',
		currentDate: '',
		statusAmt: '1',
		currentAmt: 0,
		totalAmt: '',
		totalAmtStatus: '1',
		currentAmtStatus: '1'
		
	}
  },
  mounted() {
	
	let date = new Date();
	let Y = date.getFullYear();
	let M = (date.getMonth()+1) >= 10?(date.getMonth()+1):'0'+(date.getMonth()+1);
	let D = date.getDate() >= 10?date.getDate():'0'+date.getDate();

	let numMonth = Number(M);
	console.log(numMonth)
	var bookkeepingData = this.$utils.getStorage('bookkeepingData');
	if(bookkeepingData){
		this.dataList = bookkeepingData;
		this.calculTotal();
	}else{
		this.dataList = [];
		for (var a = 0; a < this.getHowDays(Y, numMonth); a++) {
			let myMonth = (numMonth) >= 10?(numMonth):'0'+(numMonth);
			let myDay = (a+1) >= 10?(a+1):'0'+(a+1);
			this.dataList.push(
				{
					[myMonth]: {
						date: Y+'-'+ myMonth +'-'+myDay, 
						status: '1',
					} 
				}
			)
		}
		
		console.log(this.dataList)
	}
	
	// for (var i = 0; i < numMonth; i++) {
	
  },
  computed: {

  },
  methods: {
	addDateAmt(date, data){
		return data.day.split('-').slice(1)[1]
	},
	getHowDays(year, month) {
	   let days = [31, 28, 31, 30, 31, 30, 31, 30, 30, 31, 30, 31];
	  if ( (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0) ) {
	        days[1] = 29
	  }
	　　return days[month]  
	},
	clickDate(data) {
		if(data.type == 'prev-month' || data.type == 'next-month'){
			return
		}
		this.inputAmt = '';
		this.statusAmt = this.statusAmt?this.statusAmt:'1';
		this.currentDate = data;
		this.editAmtvisible = true;
		for (var i = 0; i < this.dataList.length; i++) {
			if(this.dataList[i].date == this.currentDate.day && this.dataList[i].amt){
				this.inputAmt = this.dataList[i].amt;
				this.statusAmt = this.dataList[i].status;
			}
		}
	},
	clickEditAmt() {
		for (var i = 0; i < this.dataList.length; i++) {
			if(this.dataList[i].date == this.currentDate.day){
				this.$set(this.dataList[i], 'status', this.statusAmt)
				this.$set(this.dataList[i], 'amt', this.inputAmt)
			}
		}
		
		setTimeout(()=>{
			this.editAmtvisible = false;
			this.inputAmt = '';
			this.statusAmt = '1';
			this.$utils.setStorage('bookkeepingData', this.dataList);
			this.calculTotal();
		})
	},
	// 计算总数
	calculTotal(){
		var monthStr = 0;
		for (var i = 0; i < this.dataList.length; i++) {
			if(this.dataList[i].amt){
				if(this.dataList[i].status == '1'){
					monthStr = monthStr+Number(this.dataList[i].amt);
				}else{
					monthStr = monthStr-Number(this.dataList[i].amt);
				}
			}
		}
		
		this.currentAmt = monthStr;
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
</style>

<style lang="scss">
.el-calendar-table .el-calendar-day{
	text-align: center;
	padding: 8px 0 0 0;
}
.el-calendar-table thead th{
	text-align: center;
}

</style>