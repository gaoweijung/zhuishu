
<template>
  <div id="book-item" class="container">
    <ul class="clearfix">
      <li v-for="book in bookList" v-bind:class="book.title" :key="book._id">
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
    <div class="change-pages">
      <button>上一页</button>
      <button v-for="page in pages" :key="page" @click="navToPage(page)">{{ page }}</button>
      <button @click="nextPage()">下一页</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      tag: "",
      bookList: [{}],
      startIndex: 0,
      total: 0
    };
  },
  methods: {
    fetchBookList() {
      this.$axios
        .get(
          "book/by-categories?gender=male&type=hot&major=" +
            this.$route.params.catname +
            "&minor=&start=" +
            this.startIndex +
            "&limit=20"
        )
        .then(response => {
          console.log(response.data);
          let books = response.data.books;
          if (books.length > 20) {
            books.length = 20;
          }
          this.bookList = books;
          this.total = response.data.total;
        });
    },
    nextPage() {
      this.startIndex += 20;
      this.fetchBookList();
    },
    navToPage(page) {
      this.startIndex = page * 20;
      this.fetchBookList();
    }
  },
  computed: {
    pages() {
      const pages = [];
      let startPage = Math.floor(this.startIndex / 20) + 1;
      for (let i = 0; i < 6; i++) {
        pages[i] = startPage;
        startPage++;
      }
      return pages;
    }
  },
  created() {
    this.fetchBookList();
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
li {
  width: 40%;
  border-bottom: 1px solid #ddd;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
}
li:first-child{
  border-top: 1px solid #ddd;
}
@media (max-width: 600px) {
  li {
    width: 80%;
  }
}
a {
  width: 100%;
  color: #999;
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
button {
  text-align: center;
  height: 38px;
  line-height: 38px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  padding: 0 13px;
  transition: all 0.2s;
}
button:hover {
  background-color: #00a1d6;
  color: #fff;
  border: 1px solid #00a1d6;
}
.change-pages {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 140px;
}
</style>


