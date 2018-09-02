<template>
  <div id="app">
    <header class="full-header">
      <div class="brand">
          <search class="search"></search>
      </div>
      <div class="nav">
        <div class="container">
          <router-link to="/">书架</router-link>
          <router-link to="/malebooks">男生小说</router-link>
          <router-link to="/femalebooks">女生小说</router-link>
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
import Search from "@/components/Search";
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
      follow: false
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
.brand {
  height: 100px;
  background: #fbfaf8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 175px;
  height: 60px;
  float: left;
  margin-top: 21px;
}


.nav {
  height: 60px;
  background-color: #d82626;

}
.nav > .container{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav a{
  color: #fff;
}


</style>
