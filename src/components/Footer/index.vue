<template lang="html">
  <footer>
     <div class="container">
      <div class="row">
       <div class="col-md-12">
        <ul class="footer-list">
         <li><a href="https://github.com/lengziyu"><font><font>Github</font></font></a></li>
         <li><a href="http://www.lengziyu.cn/blog"><font><font>Blog</font></font></a></li>
         <li><a href="https://www.createjs.cc" class="email-lnk"><font><font>CreateJS</font></font></a></li>
         <li><a href="http://www.lengziyu.cn/fenav" class="email-lnk"><font><font>FE nav</font></font></a></li>
        </ul>
       </div>
      </div>
      <div class="row">
       <div class="col-md-12">
        <p>
          <font><font>&copy;2019~2020 </font></font><a href="http://www.lengziyu.cn">
          <font><font> lengziyu </font></font>
        </a><font><font> </font><font>版权所有。</font></font>
        </p>
       </div>
      </div>
     </div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background: #c5ded7;
  padding: 3em 0;
  .footer-list {
    overflow: hidden;
    margin: 0 auto;
    max-width: 600px;
    padding: 0;
    li {
        width: 50%;
        padding-top: 1em;
        padding-bottom: 1em;
        display: block;
        float: left;
        a {
          display: block;
          text-align: center;
          text-decoration: none;
          color: #45b29a;
          font-size: 1.5em;
      }
    }
  }
   p {
      text-align: center;
      color: #45b29a;
      font-size: 1em;
      font-weight: 400;
      margin: 0;
      padding: 2.5em 0 0;
  }
}
@media (min-width: 992px){
  footer .footer-list li {
      width: 25%;
      padding: 0;
  }
}
</style>
