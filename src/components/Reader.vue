<template>
  <div id="reader" class="container">
    <div class="content">
      <h3>
        {{ bookTitle}}
      </h3>
      <p v-for="(para,index) in content" :key="index">
        {{ para.trim() }}
      </p>
    </div>
    <div class="forward-next">
      <button @click="subtractChapter" class="forward-chap">上一章</button>
      <button @click="showCatalog" class="cata">目录</button>
      <button @click="addChapter" class="next-chap">下一章</button>
    </div>
    <div class="catalog" v-if="isCatalogShowed">
      <ul>
        <li v-for="(chapter,index) in bookChapters" :key="index" @click="goDesti(index)">{{chapter.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import localStorage from "../api/localStorage";
export default {
  data() {
    return {
      bookId: "",
      bookChapters: [{}],
      bookContent: "",
      bookTitle: "",
      currentChapter: 0,
      isCatalogShowed: false
    };
  },
  methods: {
    setBookId() {
      this.bookId = this.$route.params.bookid;
    },
    // 获取书籍章节目录
    getBookChapters(f1, f2) {
      this.$axios
        .get("mix-atoc/" + this.bookId + "?view=chapters")
        .then(response => {
          this.bookChapters = response.data.mixToc.chapters;
          if (f1) {
            f1(this.currentChapter);
          }
          if (f2) {
            f2(this.currentChapter);
          }
        });
    },
    // 设置currentChapter
    setCurrentChapter() {
      if (
        localStorage.getLocalData("myfollowbook")[this.bookId] === undefined
      ) {
        this.currentChapter = 0;
      } else {
        this.currentChapter = localStorage.getLocalData("myfollowbook")[
          this.bookId
        ].lastChapter;
      }
    },
    // 获取章节内容
    fetchChapterContent(index) {
      this.$axios
        .get("chapter/" + encodeURIComponent(this.bookChapters[index].link))
        .then(res => {
          this.bookContent = res.data.chapter.body;
          this.backTop();
          });
    },
    // 获取章节标题
    fetchChapterTitle(index) {
      this.bookTitle = this.bookChapters[index].title;
    },
    // 回到页面顶端
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    subtractChapter() {
      this.getBookChapters();
      this.currentChapter--;
      this.fetchChapterTitle(this.currentChapter);
      this.fetchChapterContent(this.currentChapter);
      this.setLastChapter();
    },
    addChapter() {
      this.getBookChapters();
      this.currentChapter++;
      this.fetchChapterTitle(this.currentChapter);
      this.fetchChapterContent(this.currentChapter);
      this.setLastChapter();
    },
    // 设置已follow的书籍的最后阅读章节
    setLastChapter() {
      let bookFollowed = localStorage.getLocalData("myfollowbook");
      if (bookFollowed[this.bookId] !== undefined) {
        bookFollowed[this.bookId].lastChapter = this.currentChapter;
        localStorage.setLocalData("myfollowbook", bookFollowed);
      }
    },
    // 切换目录的显示与不显示
    showCatalog() {
      this.isCatalogShowed = !this.isCatalogShowed;
    },
    // 实现章节跳转
    goDesti(index) {
      this.currentChapter = index;
      this.bookTitle = this.bookChapters[index].title;
      this.fetchChapterContent(index);
      this.setLastChapter();
      this.isCatalogShowed = !this.isCatalogShowed;
    }
  },

  computed: {
    content() {
      let paras = this.bookContent.split("\n");
      return paras;
    }
  },

  created() {
    this.setBookId();
    this.setCurrentChapter();
    this.getBookChapters(this.fetchChapterTitle, this.fetchChapterContent);
  }
};
</script>

<style scoped>
#reader {
  font-size: 18px;
  text-indent: 2em;
  line-height: 2;
  position: relative;
}
h3 {
  text-align: center;
}
.catalog {
  position: absolute;
  width: 550px;
  height: 560px;
  overflow: scroll;
  bottom: 50px;
  left: 50%;
  margin-left: -275px;
  background-color: #fff;
}
li {
  cursor: pointer;
}
</style>
