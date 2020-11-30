<template>
  <transition name="fadeIn">
    <!-- The Modal bg -->
    <div
      id="myModal"
      v-if="visible"
      class="main-modal d-flex justify-content-center align-items-center"
    >
      <!-- Modal content -->
      <div class="main-modal__content">
        <div class="modal-header">
          <span class="app-name">YoPix</span>
          <span @click.stop="hideModal" class="close">&times;</span>
        </div>
        <div class="main-modal__body">
          <img :src="modalImageDetails.src.large" alt="" />
        </div>
        <div class="main-modal__footer">
          <div class="artist-name">
            By
            <span class="font-weight-bold">{{
              modalImageDetails.photographer
            }}</span>
          </div>
          <div @click.stop="hideModal" class="btn btn-danger ml-auto mr-3">
            Close
          </div>
          <button class="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      modalImageDetails: {},
    };
  },
  methods: {
    hideModal() {
      this.visible = false;
    },
    async showModal(img) {
      await this.setModalDetails(img);
      this.visible = true;
    },
    setModalDetails(img) {
      this.modalImageDetails = img;
    },
    closeModal() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.app-name {
  font-family: "Yesteryear", cursive !important;
  font-size: 22px;
}
.main-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.486);
  overflow: hidden;
  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}

.main-modal__content {
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: 60%;
  max-height: 750px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-header {
  width: 100%;
}
.main-modal__body {
  width: 100%;
  height: 70%;
  min-height: 500px;
  max-width: max-content;
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 0.34s ease;
}

.main-modal__body img {
  width: 100%;
}
.main-modal__footer {
  width: 100%;
  height: 5rem;
  padding: 2%;
  color: rgb(42, 42, 42);
  display: flex;
  align-items: center;
}
.btn.btn-danger,
.btn {
  background: transparent;
  color: rgb(42, 42, 42);
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.5s;
}
.fadeIn-enter, .fadeIn-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Responsiveness */
/**xsmall: */
@media only screen and (max-width: 479px) {
  .main-modal__content {
    width: 100vw;
    height: 100vh;
    min-height: 60vh;
  }
  .main-modal__body {
    height: 100%;
  }
}
</style>
