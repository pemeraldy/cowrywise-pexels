<template>
  <div class="home pb-4">
    <app-header />
    <app-gallery />
    <app-footer />
  </div>
</template>

<script>
// import EndPoint from "../api/api";
import AppHeader from "@/components/AppHeader.vue";
import AppGallery from "@/components/AppGallery.vue";
import AppFooter from "@/components/Footer.vue";
export default {
  components: {
    AppHeader,
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
