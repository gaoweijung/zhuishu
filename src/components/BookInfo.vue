<template>
  <div id="book-info" class="container">
    <div class="center">
      <img :src="imgURL" :tiltle="book.title">
      <div class="info">
        <h1 class="name">{{ book.title }}</h1>
        <p class="author">
          <span class="book-author">{{ book.author }}</span>
          <span class="split">|</span>
          <span class="minorCate">{{ book.minorCate }}</span>
          <span class="split">|</span>
          <span class="wordCount">{{ wordCount }}</span>
        </p>
        <p class="updated-time">{{ updatedTime }}</p>
        <router-link :to="{ name: 'reader',params: { bookid: bookId}}" class="read">开始阅读</router-link>
        <button @click="addOrDelete" :class="isFollowed ? 'b-grey' : 'b-red'">{{ isFollowedContent }}</button>
      </div>
      <div class="book-data">
        <div>
          <span>追书人数</span>
          <span class="red">{{ book.latelyFollower }}</span>
        </div>
        <div>
          <span>读者留存率</span>
          <span class="red">{{ book.retentionRatio + '%' }}</span>
        </div>
        <div>
          <span>日更新字数</span>
          <span class="red">{{ book.serializeWordCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import util from "@/api/localStorage";

moment.locale("zh-cn");

export default {
  data() {
    return {
      bookId: "",
      book: {},
      isFollowed: null,
    };
  },
  computed: {
    wordCount() {
      if (this.book.wordCount >= 10000) {
        return parseInt(this.book.wordCount / 10000) + "万字";
      } else {
        return this.book.wordCount + "万字";
      }
    },
    updatedTime() {
      return moment(this.book.updated).fromNow();
    },
    imgURL() {
      return "http://statics.zhuishushenqi.com" + this.book.cover;
    },
    isFollowedContent(){
      if(this.isFollowed){
        return '取消收藏';
      }
      else{
        return '加入收藏';
      }
    }
  },
  methods: {
    setBookId() {
      this.bookId = this.$route.params.bookid;
    },
    getBookInfo() {
      this.$axios.get("book/" + this.bookId).then(response => {
        this.book = response.data;
      });
    },
    addOrDelete() {
      let localShelf = util.getLocalData("myfollowbook")
        ? util.getLocalData("myfollowbook")
        : {};
      this.isFollowed = localShelf[this.bookId] ? true : false;
      if (this.isFollowed) {
        delete localShelf[this.bookId];
        this.isFollowed = false;
        util.setLocalData("myfollowbook", localShelf);
      } else {
        localShelf[this.bookId] = {
          title: this.book.title,
          cover: this.book.cover,
          lastChapter: 0
        };
        this.isFollowed = !this.isFollowed;
        util.setLocalData("myfollowbook", localShelf);
      }
    }
  },
  created() {
    this.setBookId();
    this.getBookInfo();
  }
};
</script>

<style scoped>
#book-info {
  background-color: #fff;
  margin: 30px auto;
  padding: 30px 0 0 30px;
}
.center {
  width: 380px;
  margin: 0 auto;
}
img {
  float: left;
  width: 90px;
  height: 120px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 0 5px 10px #666;
}
.book-data {
  clear: left;
}
.name {
  color: #333;

  padding: 5px 0;
}
.info {
  margin-left: 115px;
}
.info > h1 {
  display: inline-block;
}
.book-author,
.updated-time {
  height: 28px;
  line-height: 28px;
}
.book-data {
  margin-top: 20px;
}
.book-data > div {
  display: inline-block;
  width: 32%;
  vertical-align: middle;
  text-align: center;
}
.book-data > div > span {
  display: block;
  height: 25px;
  line-height: 25px;
}
.read,
button{
  display: inline-block;
  width: 120px;
  height: 30px;
  line-height: 30px;
  color: #fff; 
  text-align: center;
  vertical-align: middle;
  border-radius: 15px;
}
.read{
  background-color: red;
}
button{
  border: none;
  margin-left: 5px;
}
.b-grey{
  background-color: #666;
}
.b-red{
  background: red;
}
</style>
