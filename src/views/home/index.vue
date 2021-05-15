<template lang="html">
  <div class="home">
    <Header />
    <Top />
    <Hello />
    <Project />
    <Icanhelp />
    <Footer />
  </div>
</template>

<script>
import Headroom from 'headroom.js'
import Top from './components/Top'
import Hello from './components/Hello'
import Project from './components/Project'
import Icanhelp from './components/Icanhelp'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {WOW} from 'wowjs'
export default {
  components: {
    Hello,
    Top,
    Project,
    Icanhelp,
    Header,
    Footer,
  },
  mounted() {
    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 5,
        offset : 205,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });
    header.init();
    var wow = new WOW({
      live: false,
      offset: 300
    })
    wow.init()
  }
}
</script>

<style lang="scss">
.home{
  h2{
    text-align: center;
    margin-top: 40px;
  }
  h3 {
  	padding-top: 0em;
    margin-bottom: 30px;
    color: #45b29a;
    text-align: center;
    font-family: brandon-grotesque,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
  }
  p{
    font-size: 16px;
    color: #888;
    text-align: center;
    line-height: 30px;
  }

}
</style>
