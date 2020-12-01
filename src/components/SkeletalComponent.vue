<template>
  <div class="container photo-container mt-4">
    <div id="photos-placeholder">
      <div
        class="placeholder pulse"
        v-for="(photo, index) in skeletals"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      skeletals: 10,
    };
  },
};
</script>

<style scoped>
#photos-placeholder {
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

#photos-placeholder .placeholder {
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: all 0.19s ease-in;
  background: #f6f7f8;
  height: 300px;
  width: 300px;
  animation: pulse 1s infinite ease-in-out;
  -webkit-animation: pulse 1s infinite ease-in-out;
}
@keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}

@media (max-width: 1200px) {
  #photos-placeholder {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
@media (max-width: 1000px) {
  #photos-placeholder {
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
  #photos-placeholder {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
    margin-left: -10px;
  }
}
</style>
