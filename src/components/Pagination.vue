<template>
  <div class=" container my-2 d-flex justify-content-between">
    <div class="pagination   d-flex w-100 justify-content-end ">
      <div
        v-if="currentPage > 1"
        @click="prev"
        class="prev-btn btn btn-primary"
      >
        Prev
      </div>
      <div v-if="searchTotal" class="total-result btn mx-4">
        <span class="current-page mr-1">{{ currentPage }}</span>
        /
        <span class="total-pages ml-1">{{ searchTotal }}</span>
      </div>
      <div
        v-if="currentPage < searchTotal"
        @click="next"
        class="next-btn btn btn-primary "
      >
        Next
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    searchText() {
      return this.$store.getters["getSearch"];
    },
    searchTotal() {
      return Math.ceil(this.$store.getters["getTotalPhotos"] / 20);
    },
    currentPage: {
      get() {
        return this.$store.getters["getCurrentPage"];
      },
    },
  },
  methods: {
    next() {
      if (this.searchText === "") return;
      let qPage = this.currentPage + 1;
      this.$store.commit("SET_CURRENT_PAGE", qPage);
      this.$router.push({
        name: "search",
        query: {
          ...this.$route.query,
          term: this.searchText,
          page: qPage,
          t: new Date().getTime(),
        },
      });
      this.$store.dispatch("fetchPhotosPerPag", {
        query: this.searchText,
        page: qPage,
      });
    },
    prev() {
      if (this.searchText === "" && this.currentPage <= 0) return;
      let qPage = this.currentPage - 1;
      this.$store.commit("SET_CURRENT_PAGE", qPage);
      this.$router.push({
        name: "search",
        query: {
          ...this.$route.query,
          term: this.searchText,
          page: qPage,
          t: new Date().getTime(),
        },
      });
      this.$store.dispatch("fetchPhotosPerPag", {
        query: this.searchText,
        page: qPage,
      });
    },
  },
  //   watch: {
  //     $route: {
  //       handler() {
  //         console.log(this.$route);
  //         this.$store.dispatch("fetchPhotosPerPag", {
  //           query: this.$route.query.term,
  //           page: this.$route.query.page,
  //         });
  //       },
  //     },
  //   },
};
</script>

<style scoped>
.pagination {
  /* background: orange; */
}
.prev-btn,
.next-btn {
  width: 100px;
  border-radius: 4px;
}
@media only screen and (max-width: 479px) {
  .pagination {
    justify-content: space-evenly !important;
  }
}
</style>
