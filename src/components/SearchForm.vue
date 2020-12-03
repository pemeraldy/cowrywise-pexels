<template>
  <form
    id="searchForm"
    @submit.prevent="searchPhotos"
    class="form-inline search-form-wrap"
  >
    <input
      v-model="searchText"
      class="form-control search-form w-100 mr-sm-2"
      type="text"
      placeholder="Search for photo"
    />
    <button
      class="btn search-btn btn-large btn-primary my-2 my-sm-0"
      type="submit"
    >
      Search
    </button>
    <!-- <span class="suggestions">Place, People, Office, Sport..</span> -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      pageNumber: null,
    };
  },
  computed: {
    searchText: {
      get() {
        return this.$store.getters[`getSearch`];
      },
      set(value) {
        return this.$store.commit("SET_SEARCH", value);
      },
    },
  },
  methods: {
    async searchPhotos() {
      if (this.searchText === "") return;
      this.$store.commit("SET_CURRENT_PAGE", 1);
      this.$router.push({
        name: "search",
        query: {
          ...this.$route.query,
          term: this.searchText,
          page: 1,
          t: new Date().getTime(),
        },
      });
      this.$store.dispatch("fetchPhotosPerPag", {
        query: this.searchText,
        page: this.pageNumber,
      });
    },
  },
  mounted() {
    this.pageNumber = this.$store.getters["getCurrentPage"];
    console.log(this.$store.getters["getCurrentPage"]);
  },
};
</script>

<style scoped>
.search-form-wrap {
  width: 60%;
  position: relative;
  -webkit-box-shadow: 6px 13px 18px -16px rgba(0, 0, 0, 0.35);
  -moz-box-shadow: 6px 13px 18px -16px rgba(0, 0, 0, 0.35);
  box-shadow: 6px 13px 18px -16px rgba(0, 0, 0, 0.35);
}
.search-form.form-control {
  padding: 25px;
  width: 100%;
  background: rgba(255, 255, 255, 0.3) !important;
  transition: background 0.34s ease-in;
  color: #e7e7e79a !important;
}
.search-form.form-control:focus {
  outline: none !important;
  background: #ffffff !important;
  color: #292929 !important;
  border: none;
}
.search-btn {
  position: absolute;
  height: 50px;
  width: 120px;
  outline: none;
  border-radius: 0 4px 4px 0;
  /* margin-left: -30px; */
  right: 0;
}
.suggestions {
  position: absolute;
  left: 0;
  bottom: -36px;
  color: rgb(212, 211, 211);
  margin-top: 6px;
}

@media only screen and (max-width: 479px) {
  .search-form-wrap {
    width: 80%;
    position: relative;
  }
  .search-form.form-control {
    padding: 25px;
    width: 100%;
    background: rgba(0, 0, 0, 0.3) !important;
  }
  .search-btn {
    position: absolute;
    height: 50px;
    padding: 0;
    border-radius: 0 4px 4px 0;
    width: 67px;
    text-align: center;
    right: 0;
  }
  .search-form.form-control:focus {
    outline: none !important;
    border: none;
  }
  .suggestions {
    font-size: 10px;
    bottom: -22px;
  }
}
</style>
