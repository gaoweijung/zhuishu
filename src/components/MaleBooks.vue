
<template>
  <div id="male-books" class="container">
    <ul class="clearfix">
      <li v-for="(cat,index) in cats" :class="'cat[' + index + ']'" :key="index">
        <router-link :to="{ name: 'cat',params: { catname: cat.name}}" v-if="cat.name">
          <img :src="getImgURL(cat.bookCover[1])" :title="cat.name">
          <p>{{ cat.name }}</p>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: {},
  data() {
    return {
      cats: [{}]
    };
  },
  methods: {
    // 获取分类列表
    getCats() {
      this.$axios.get("cats/lv2/statistics").then(res => {
        this.cats = res.data.male;
      });
    },
    getImgURL(url) {
      return "http://statics.zhuishushenqi.com" + url;
    }
  },
  mounted() {
    this.getCats();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  float: left;
  width: 200px;
  text-align: center;
  line-height: 30px;
  margin-top: 20px;
}
img {
  width: 90px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 5px 10px #666;
}
</style>
