<template>
    <div Id="search">
        <input class="search-input" type="text" placeholder="搜索书名或者作者" v-model="keyword">
        <router-link :to="{ name: 'search',params: { keyword: keyword}}"
        class="search-btn"></router-link>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.search-input {
  color: #666;
  width: 260px;
  height: 100%;
  line-height: 40px;
  padding-left: 10px;
  border: 0 none;
  box-sizing: border-box;
  background: #f2f2f2;
  outline: none;
}
.search-btn {
  float: right;
  width: 40px;
  height: 40px;
  background-color: #cab389;
  background-image: url(../assets/icon/search.png);
  background-repeat: no-repeat;
  background-position: center center;
  cursor: pointer;
}
</style>
