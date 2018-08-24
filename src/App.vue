<template>
  <div id="app">
    <div class="full-top">
      <div class="container .clearfix">
        <div class="connection">
          <div class="follow" v-on:mouseover="showFollow">
            <a>+关注</a>
            <div class="follow-code" v-if="follow">
              <div class="block clear-fix">
                <div class="sub-block fl">
                  <img src="./assets/qrCode/weibo.png" alt="微博二维码">
                  <p>微博</p>
                </div>
                <div class="sub-block fl">
                  <img src="./assets/qrCode/fuwuhao.png" alt="微信二维码">
                  <p>微信</p>
                </div>
              </div>
            </div>
          </div>
          <span class="space">|</span>
          <div class="service">
            <a>联系客服</a>
            <div class="contact-code">
              <div class="block">
                <div class="sub-block">
                  <img src="./assets/qrCode/fuwuhao.png" alt="微信客服二维码">
                  <p>关注微信</p>
                  <p>可以联系客服妹子哦</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <header class="full-header">
      <div class="brand">
        <div class="container clearfix">
          <a href="/" title="追书神器小说网站">
            <img src="./assets/logo.png" alt="追书神器" class="logo">
          </a>
          <search class="search"></search>
        </div>
      </div>
      <div class="nav">
        <div class="container">
          <ul class="nav-cells clearfix">
            <li class="nav-cell">
              <router-link to="/">书架</router-link>
            </li>
            <li class="nav-cell">
              <router-link to="/malebooks">男生小说</router-link>
            </li>
            <li class="nav-cell">
              <router-link to="/femalebooks">女生小说</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import BookShelf from "./components/BookShelf.vue";
import MaleBooks from "./components/MaleBooks.vue";
import FemaleBooks from "./components/FemaleBooks.vue";
import Search from "@/components/Search"
 /* eslint-disable */
export default {
  name: "app",
  components: {
    BookShelf,
    MaleBooks,
    FemaleBooks,
    Search
  },
  data() {
    return {
      follow: false,

    };
  },
  methods: {
    showFollow: function() {
      this.follow = true;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}
ol,
ul {
  list-style: none;
}
.fr {
  float: right;
}

.fl {
  float: left;
}

.clearfix::before,
.clearfix::after {
  overflow: hidden;
  visibility: hidden;
  content: "";
  clear: both;
  display: table;
}
.nav-cell{
  text-align: center;
}

#app {
  font-family: PingFangSC-Regular, HelveticaNeue-Light, "Helvetica Neue Light",
    "Microsoft YaHei", sans-serif;
  color: #333;
  font-weight: 400;
  line-height: 1;
  font-size: 14px;
  -webkit-font-soothing: antialiased;
  background: #fbfaf8;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.full-top {
  min-width: 1200px;
  background-color: #f2f2f2;
}

.full-top > .container {
  height: 40px;
}

.connection {
  float: right;
  width: 125px;
  line-height: 40px;
  /* display: flex;
  align-items: center; */
}

.follow,
.service {
  display: inline-block;
  vertical-align: middle;
}

.follow,
.service {
  cursor: pointer;
}

.follow:hover,
.service:hover {
  color: #d82626;
}

.connection .space {
  margin: 0 8px;
}

.follow,
.service {
  position: relative;
}

.follow-code {
  display: none;
  width: 250px;
  position: absolute;
  z-index: 1;
  right: 0;
  margin-top: 10px;
  padding: 15px;
  border: 2px solid #d82626;
  border-radius: 5px;
  background: #fff;
}

.follow:hover .follow-code {
  display: block;
}

.sub-block {
  text-align: center;
  width: 107px;
  margin: 0 10px 0 5px;
}

.sub-block img {
  height: 107px;
  width: 107px;
}

.contact-code {
  display: none;
  z-index: 1;
  position: absolute;
  right: -20px;
  margin-top: 10px;
  padding: 15px;
  border: 2px solid #d82626;
  color: #333;
  text-align: center;
  line-height: 20px;
  border-radius: 5px;
}
.service:hover .contact-code {
  display: block;
}
.sub-block img {
  width: 107px;
  height: 107px;
}

.brand {
  height: 100px;
  background: #fbfaf8;
}
.brand .container a {
  text-decoration: none;
}
.logo {
  width: 175px;
  height: 60px;
  float: left;
  margin-top: 21px;
}
.search {
  float: right;
  width: 300px;
  height: 40px;
  margin-top: 30px;
  border: 2px solid #cab389;
}

.nav {
  background-color: #fff;
}
.nav {
  height: 60px;
  background-color: #d82626;
}
.nav-cells {
  width: 100%;
}
.nav-cell {
  float: left;
  width: 33.333%;
  box-sizing: border-box;
}
.nav-cell a {
  color: #fff;
  line-height: 60px;
}
</style>
