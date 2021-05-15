<template lang="html">
  <section id="project" class="projects">
     <div class="container">
      <div class="row">
       <div class="col-md-12">
        <article>
          <h2>我的项目</h2>
         <h3>My project</h3>
        </article>
       </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-4 wow fadeInUp" :data-wow-duration="idx*0.9+'s'" v-for="(i, idx) in list" >
          <div class="thumbnail" style="height: 352px;">
            <a class="pic" target="_blank" :href="i.url">
              <img :src="i.imgUrl">
            </a>
            <div class="caption">
              <a :href="i.url" target="_blank">
                <h5>{{ i.name }}</h5>
                <small>{{ i.detail }}</small>
              </a>
              <div class="tags">
                <span class="label label-danger" v-for="tag in i.skillTags">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     <div class="breaker">
       <div class="container">
        <div class="row">
         <div class="col-md-12">
          <div class="line"></div>
         </div>
        </div>
       </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
      {
        id: "1",
        name: "CreateJS 中文网",
        url: "http://createjs.cc",
        imgUrl: require("@/assets/images/projects/createjs.jpg"),
        detail: "CreateJS中文网致力于CreateJS在中国的推广，运用了vue2、element开发。",
        date: "2016.08",
        skillTags: [
          "Vuejs2", "Sass", "Vue@next-router"
        ]
      },
      {
        id: "2",
        name: "前端导航",
        url: "http://lengziyu.cn/fenav",
        imgUrl: require("@/assets/images/projects/fenav.jpg"),
        detail: "前端导航云集高质量前端网站的内容，云集大量前端网站。运用angular1开发。",
        date: "2015.12",
        skillTags: [
          "angularjs1", "FIS3", "requirejs", "sass"
        ]
      },
      {
        id: "3",
        name: "冷子欲 BLOG",
        url: "http://lengziyu.cn/blog",
        imgUrl: require("@/assets/images/projects/supertuxkart.jpg"),
        detail: "学习到的新知识、总结工作中遇到的问题及解决方法。用hexo搭建。",
        date: "2016.10",
        skillTags: [
          "Github Page", "Sass"
        ]
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
.projects{
  background-color: #f9f9f9;
  padding-top: 70px;
  padding-bottom: 60px;
  h3{
    margin-bottom: 40px;
    font-size: 22px;
  }
}
.projects .thumbnail {
  display: block;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  max-width: 310px;
  margin-bottom: 30px;
  border-radius: 0;
  .pic{
    cursor: pointer;
    height: 182px;
    img{
      height: 182px;
    }
  }
  h5{
    margin-top: 22px;
  }
  small{
    font-size: 14px;
    color: #888;
    line-height: 26px;
  }
  .tags{
    text-align: left;
    margin-top: 15px;
    .label {
      display: inline;
      padding: .2em .6em .3em;
      font-size: 75%;
      font-weight: 100;
      line-height: 1;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: .25em;
      margin-right: 10px;
    }
    .label:nth-child(1){
      background-color: #f0ad4e;
    }
    .label:nth-child(2){
      background-color: #d9534f;
    }
    .label:nth-child(3){
      background-color: #5bc0de;
    }
    .label:nth-child(4){
      background-color: #337ab7;
    }
    .label:nth-child(5){
      background-color: #5cb85c;
    }
  }
}

.projects .thumbnail .caption {
  height: 200px;
  overflow-y: hidden;
  color: #555
}

.projects .thumbnail .caption a:focus,.projects .thumbnail .caption a:hover {
  text-decoration: none
}

.projects .thumbnail img {
  max-width: 100%;
  height: auto
}

</style>
