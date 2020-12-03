<template>
  <div class="container photo-container">
    <div class="row my-3">
      <div class="col-12 text-center ">
        <h3 v-if="loadingState">Searching for " {{ searchText }} "</h3>
        <h3 v-else>Search Results for {{ searchText }}</h3>
      </div>
    </div>
    <div class="placeholder" v-show="loadingState">
      <skeletal-component></skeletal-component>
    </div>
    <div id="photos">
      <span v-if="photos.length > 0">
        <img
          @click="$refs.modalPhoto.showModal(photo)"
          class="thumbnail"
          v-for="photo in photos"
          :key="photo.id"
          :src="photo.src.medium"
          :alt="photo.photographer"
        />
      </span>
      <div v-else>
        <h3>No Result Found</h3>
      </div>
    </div>
    <main-modal ref="modalPhoto" />
  </div>
</template>

<script>
import MainModal from "./MainModal";
import SkeletalComponent from "./SkeletalComponent";

export default {
  components: {
    MainModal,
    SkeletalComponent,
  },
  data() {
    return {
      allPhotos: [],
      searchStates: "",
      loading: true,
    };
  },
  computed: {
    photos() {
      return this.$store.getters["getPhotos"];
    },
    searchText() {
      return this.$store.getters["getSearch"];
    },
    loadingState() {
      return this.$store.getters["getLoading"];
    },
  },
  async mounted() {
    // this.laoding = true;
    console.log(this.loadingState);
    try {
      const resp = await this.$store.dispatch("fetchPhotos", "african");
      this.allPhotos = resp;
      // this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
#photos {
  min-height: 50vh;
  /* Prevent vertical gaps */
  line-height: 0;
  -webkit-column-count: 4;
  -webkit-column-gap: 20px;
  -moz-column-count: 4;
  -moz-column-gap: 20px;
  column-count: 3 !important;
  column-gap: 50px;
}

#photos img {
  width: 100% !important;
  height: auto !important;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: all 0.19s ease-in;
}
#photos img:hover {
  transform: scale(1.03);
}
.photo-container {
  margin-top: -180px;
}

@media (max-width: 1200px) {
  #photos {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
@media (max-width: 1000px) {
  #photos {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}
@media (max-width: 800px) {
  #photos {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}
@media only screen and (max-width: 400px) {
  #photos {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
    margin-left: -10px;
  }
}
</style>
