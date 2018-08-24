
<template>
  <div class="hello">
    <book v-bind:books="books"></book>
  </div>
</template>

<script>
/* eslint-disable */
import bookdetails from '@/components/BookDes'

export default {
  props: {
  },
  components: {
    'book': bookdetails
  }
  ,
  data() {
    return {
      books: [],
    };
  },
  methods: {
    fetchBookList(){
      this.$axios
        .get("book/by-categories?gender=male&type=hot&major=" + this.$route.params.catname + "&start=0&limit=20")
        .then(response => this.books = response.data.books )
    }
  },
  created(){
    this.fetchBookList();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
