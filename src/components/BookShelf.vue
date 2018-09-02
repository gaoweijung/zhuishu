<template>
  <div id="book-shelf" class="container">
    <ul>
      <li v-for="(book,key) in followedBooks"
          @click="read(key)"
          :key="key">
        <img :src="util.staticPath + book.cover">
        <p>{{ book.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import util from "@/api/localStorage";
export default {
  name: "MaleBooks",
  props: {},
  data() {
    return {
      followedBooks: {},
      currentChapter: 0,
      util
    };
  },
  methods: {
    getFollowed() {
      this.followedBooks = util.getLocalData("myfollowbook");
    },
    read(id){
      this.$router.push({name: 'reader',params: { bookid: id}});
    }
  },
  mounted() {
    this.getFollowed();
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
li{
  width: 25%;
  text-align: center;
  cursor: pointer;
  margin: 20px 0;
}
img {
  width: 90px;
  height: 120px;
  border-radius: 10px;
  box-shadow: 0 5px 10px #555;
}
p{
  height: 20px;
  line-height: 20px;
  padding-top: 10px;

}
</style>
