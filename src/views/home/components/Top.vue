<template lang="html">
  <section id="top">
    <div class="container">
      <div class="masthead-wrap">
        <div class="title">
          <div class="transistion slide-contents">
            <h2>
              <Imlengziyu />
              <!-- <img class="max" src="@/assets/images/me.png"> -->
            </h2>
            <p class="wow fadeIn">
              a web development.
            </p>
          </div>
          <div class="transistion cloud left-cloud"></div>
          <div class="transistion cloud right-cloud"></div>
        </div>
      </div>

      <div class="masthead-wrap">
        <div class="earth-holder">
          <img class="max" src="@/assets/images/land.svg">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Imlengziyu from './Imlengziyu'
import anime from 'animejs/lib/anime.es.js';

export default {
  components: {
    Imlengziyu
  },
}
</script>

<style lang="scss" scoped>
#top{
  background-color: #e0ebe8;
  padding-top: 100px;
  .title{
    padding: 2em 0 0;
    position: relative;
    .cloud {
      position: absolute;
      background: url('../../../assets/images/cloud.svg') top left no-repeat;
      width: 150px;
      height: 45px;
      -webkit-transition: all 1s ease-in-out;
      transition: all 1s ease-in-out;
      z-index: 2;
    }
    .slide-contents{
      text-align: center;
      p{
        text-align: center;
        color: #45b29a;
        padding: 1em 0;
        font-size: 180%;
        font-weight: 400;
        font-family: brandon-grotesque,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
      }
    }
  }
  .masthead-wrap{
    max-width: 800px;
    margin: 0 auto;
    .earth-holder img{
      vertical-align: bottom;
    }
  }
  h2 {
    max-width: 16em;
    text-align: center;
    margin:  0 auto;
    margin-top: -2em;
  }
}
@media (min-width: 992px) {
  .title .right-cloud {
      right: 2em;
      top: 6em;
  }
  .title .left-cloud {
      left: 2em;
      bottom: 5em;
  }
}

.title .left-cloud {
    left: -7em;
    bottom: 2em;
}
  .title .right-cloud {
    right: 0em;
    top: 1em;
}
</style>
