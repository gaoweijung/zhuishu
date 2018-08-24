
<template>
  <div id="book-details">
    <ul class="container clearfix">
      <li v-for="book in books" v-bind:class="book.title" :key="book._id">
        <router-link v-bind:to="{'name': 'bookinfo',params: {bookid: book._id}}">
          <div class="img">
            <img :src="'http://statics.zhuishushenqi.com' + book.cover" alt="">
          </div>
          <div class="book-msg">
            <h3 class="name">{{ book.title }}</h3>
            <p class="author">
              <span class="author">{{ book.author }}</span>
              <span class="split">|</span>
              <span>{{ book.majorCate }}</span>
            </p>
            <p class="short-intro">
              {{ book.shortIntro }}
            </p>
            <p class="hot">
              <span class="red">
                {{ book.latelyFollower}}
              </span>
              <span>在追</span>
              <span class="split">|</span>
              <span class="red">
                {{ book.retentionRatio }}
              </span>
              <span>读者留存</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  props: ["books"],
  data() {
    return {
      tag: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
a {
  float: left;
  width: 410px;
  color: #999;
  margin-left: 125px;
  padding: 20px 15px;
}

.img > img {
  float: left;
  width: 90px;
  height: 120px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 0 5px 10px #555;
}
.book-msg {
  height: 120px;
  margin-left: 105px;
}
.name {
  color: #333;
  height: 22px;
  line-height: 22px;
}
.author {
  height: 28px;
  line-height: 28px;
}
.split {
  padding: 0 10px;
}
.short-intro {
  font-size: 12px;

  height: 40px;
  margin: 5px 0;
  /* 设置为满两行之后的内容取消 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* 隐藏多余的文字 */
  overflow: hidden;
  line-height: 20px;
}
.hot {
  font-size: 12px;
  height: 20px;
  line-height: 20px;
}
.red {
  color: #d82626;
}
</style>


