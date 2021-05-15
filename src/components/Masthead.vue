<template lang="html">
  <div class="masthead-wrap">
    <div id="title" class="work-head">
       <div class="container">
        <div class="transistion cloud left-cloud-notes"></div>
        <div class="transistion cloud right-cloud-notes"></div>
        <div class="transistion flag flag-left"></div>
        <div class="transistion flag flag-right"></div>
        <div class="row">
         <div class="col-md-12">
          <div id="head-slider" class="transistion">
           <div class="slide-contents">
            <div class="slide">
             <h2 class="notes">{{ title }}</h2>
			 <h3 class="subtitle">{{ subtitle }}</h3>
            </div>
           </div>
          </div>
         </div>
         <!-- /col 24 -->
        </div>
        <!-- /row -->
       </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['title', 'subtitle']
}
</script>

<style lang="scss" scoped>
#title.work-head {
	padding-bottom: 4em
}
.masthead-wrap{
    padding-top: 130px;
    overflow: hidden;
    background: #e0ebe8;
    height: 303px;
}
#title{
  padding: .5em 0 0;
  position: relative;
}
#title .container {
    position: relative;
}
 #title h2.notes {
	  color: #45b29a;
	  font-size: 36px;
	  text-align: center;
  }
  #title .subtitle{
	  text-align: center;
	  font-weight: 100;
	  letter-spacing: 3px;
	  color: #666;
	  opacity: .6;
	  font-size: 26px;
  }
@media (min-width: 992px){
	 #title h2.notes {
		  font-size: 46px;
	}
	 #title .subtitle{
		font-size: 36px;
	}
  #title .flag.flag-left {
      left: 12em;
      bottom: -4em;
  }
  #title .flag.flag-right {
      right: 15em;
      bottom: -4em;
  }
}


#title .flag.flag-left {
    left: 1.5em;
    bottom: -4.5em;
}
#title .flag {
    position: absolute;
    background: url('../assets/images/flag.svg') top left no-repeat;
    width: 42px;
    height: 154px;
}

h2.notes figure {
    max-width: 140px;
    margin: 0 auto;
    position: relative;
    z-index: 990;
    -webkit-animation-delay: .2s;
}

#title .flag.flag-right {
    right: 2.5em;
    bottom: -4.5em;
}
#title .flag {
    position: absolute;
    background: url('../assets/images/flag.svg') top left no-repeat;
    width: 42px;
    height: 154px;
}

</style>
