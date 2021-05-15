<template>
	<div>
		<Header />
		<div class="mainer container">
			<el-calendar v-model="value" ref="calendarEl">
				<template
				slot="dateCell"
				slot-scope="{date, data}">
					<p :class="data.isSelected?'is-selected':''" @click="clickDate(data)">
						<!-- {{ data.day.split('-').slice(1)[1] }} -->
						<!-- {{ data.isSelected ? '✔️' : ''}} -->
				<!-- 		<span v-for="a in addDateAmt(date, data)">
							{{ a }}
						</span> -->
						{{ addDateAmt(date, data) }}
					</p>
				</template>
			</el-calendar>
		</div>
		<!-- <Footer/> -->
		
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
		dateList: []
	}
  },
  mounted() {
	let date = new Date();
	let Y = date.getFullYear();
	let M = date.getMonth();
	let D = date.getDate();
	console.log(Y)
	console.log(M)
	console.log(D)
	// for (var i = 0; i < date.getMonth().length; i++) {
		
	// }
	console.log(this.getHowDays(Y, M))
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
	clickDate(date) {
		console.log(date)
	}
	 
  }
}
</script>

<style lang="scss" scoped>
.mainer{
	margin-top: 120px;
	overflow: hidden;
}
</style>

<style lang="scss">
.el-calendar-table .el-calendar-day{
	text-align: center;
}
.el-calendar-table thead th{
	text-align: center;
}
</style>