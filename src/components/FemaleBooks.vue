<template>
  <div id="male-books" class="container">
    <ul>
      <li v-for="(cat,index) in cats" :class="'cat[' + index + ']'" :key="index" class="clearfix">
        <router-link :to="{ name: 'cat',params: { catname: cat.name}}" v-if="cat.name">
          <img :src="getImgURL(cat.bookCover[0])" :title="cat.name">
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
        this.cats = res.data.female;
        console.log(res.data);
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
ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
ul li {
  text-align: center;
  line-height: 30px;
  margin: 20px;
  
}
img {
  flex: 1 0 auto;
  width: 90px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 5px 10px #666;
}
</style>
