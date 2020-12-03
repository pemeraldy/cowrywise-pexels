<template>
  <div class="home pb-4">
    <app-header />
    <app-gallery />
    <pagination />
    <app-footer />
  </div>
</template>

<script>
// import EndPoint from "../api/api";
import AppHeader from "@/components/AppHeader.vue";
import Pagination from "@/components/Pagination.vue";
import AppGallery from "@/components/AppGallery.vue";
import AppFooter from "@/components/Footer.vue";
export default {
  components: {
    AppHeader,
    Pagination,
    AppGallery,
    AppFooter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.home {
  background-color: #ededed;
}
</style>
