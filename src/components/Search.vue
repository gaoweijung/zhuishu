<template>
    <div id="search">
        <input class="search-input" type="text" placeholder="搜索书名或者作者" v-model="keyword">
        <button @click="search()">
          <i></i>
          搜索
        </button>
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
  methods: {
    search(){
      this.$router.push({
        name: 'search',
        params: {
          keyword: this.keyword
        }
      })
    }
  }
 
};
</script>

<style scoped>
  #search{
    position: relative;
    width: 30%;
  }
  @media (max-width: 600px) {
    #search{
      width: 80%;
    }
  }
  input{
    box-sizing: border-box;
    width: 100%;
    height: 34px;
    padding: 6px 30% 6px 5%;
    color: #999;
    font-size: 1.2rem;
    border: 1px solid #d82626;
    border-radius: 34px;
    outline: none;
  }
  button{
    position: absolute;
    width: 30%;
    height: 100%;
    right: 0;
    top: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    color: #ffffff;
    background-color: #d82626;
    border: 1px solid #d82626;
    outline: none;
  }
</style>
