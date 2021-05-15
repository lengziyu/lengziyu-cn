<template lang="html">
  <section id="hello">
     <div class="container">
      <div class="row">
       <div class="col-md-12">
        <article>
         <figure>
          <img class="headimg animation swing wow swing" src="@/assets/images/avatar.jpg" />
         </figure>
         <h3><font><font>Hello.</font></font></h3>
         <p>
           我是陈广达&lengziyu，一个来自广东的WEB前端开发者。
           <br>
           我喜欢交朋友，如果我们志同道合，也许我们可以成为好朋友。
           <br>
           喜欢研究前端的知识，喜欢用react开发项目，略懂nodejs，也有一个成为前端大牛的梦想。
           <br>
         </p>
        </article>
       </div>
       <div id="get-cookie">
         <button @click="clickAbout()" class="button button--winona button--border-thin button--round-s wow headShake" data-text="认识一下"><span>认识一下</span></button>
       </div>
      </div>
     </div>
  </section>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  methods: {
    clickAbout() {
      this.$utils.routeTo('/about')
    },
  }
}
</script>

<style lang="scss" scoped>
#hello {
	padding: 6em 0 0;
	margin: 0 0 3em
}

#hello article {
	margin: 0 auto;
	// max-width: 460px
}

#hello article figure {
	margin: 0 auto;
	max-width: 150px;
  img{
    border-radius: 100%;
  }
}

#hello article figure img {
	width: 100%
}

#hello article h3 {
	text-align: center;
	padding: .5em 0
}

#hello article p {
  font-size: 16px;
  color: #888;
  line-height: 30px;
  text-align: center;
}
#get-cookie{
  margin: 0 auto;
  width: 160px;
}
</style>
