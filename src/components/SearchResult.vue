<template>
    <div id="search-result" class="search-result">
        <div class="book-list">
            <div class="book clearfix" v-for="book in books" :key="book._id">
                <img :src="'http://statics.zhuishushenqi.com' + book.cover" :tilte="book.tilt">
                <div class="book-des">
                    <h4 class="name">{{ book.title }}</h4>
                    <p class="author">
                        <span>{{ book.author }}</span>
                        <span class="split">|</span>
                        <span>{{ book.cat }}</span>
                        </p>
                    <p class="desc">{{ book.shortIntro }}</p>
                    <p class="popuparity">
                        <span class="red">{{ book.latelyFollower }}</span>
                        <span>人气</span>
                        <span class="split">|</span>
                        <span class="red">{{ book.retentionRatio}}</span>
                        <span>读者留存</span>
                    </p>
                </div>
                <router-link :to="{ name: 'reader',params: { bookid: book._id}}" class="link">开始阅读</router-link>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      books: [{}]
    };
  },
  methods: {
    getSearchResult() {
      this.$axios
        .get("book/fuzzy-search?query=" + this.$route.params.keyword)
        .then(res => {
          this.books = res.data.books;
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.getSearchResult();
  },
  watch: {
    $route(to, from) {
      this.getSearchResult();
    }
  }
};
</script>

<style scoped>
    .search-result{
        width: 660px;
        margin: 0 auto;
        padding: 15px 0;
    }
    .book{
        position: relative;
        padding: 30px;
    }
    .book p{
        color: #999;
        line-height: 20px;
        font-size: 12px;
    }
    img{
        float: left;
        width: 90px;
        height: 120px;
        border: 1px solid #ebebeb;
        border-radius: 7px;
        box-shadow: 2px 4px 6px #bbb;
    }
    .book-des{
        height: 120px;
        margin-left: 105px;
    }
    .name{
        height: 22px;
        line-height: 22px;
    }
    .author{
        height: 28px;
        line-height: 28px;
    }
    .desc{
        height: 40px;
        margin: 5px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .link{
        width: 120px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        text-align: center;
        border: 0 none;
        border-radius: 15px;
        background: #d82626;
        position: absolute;
        bottom: 25px;
        right: 0;
    }
</style>
