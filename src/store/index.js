import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryInit:'animals',    
    photos:[],
    totalPhotos:null,
    search:'',
    currentPage:1,
  },
  mutations: {
    SET_PHOTOS:(state, data) => state.photos = data,
    SET_SEARCH: (state, search) => {
      state.search = search
    },
    TOTAL_PHOTOS:(state, data) => state.totalPhotos = data,
    SET_CURRENT_PAGE: (state,data) => state.currentPage = data
  },
  actions: {
    async fetchPhotos({commit},query,page){
      try {
        const resp = await Api.fetchPhotos(query,page);
        console.log(resp)
        const photos = await resp.photos
        commit('SET_PHOTOS', photos)
        commit('TOTAL_PHOTOS', resp.total_results)
        // return photos
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPhotosPerPag({commit}, {page,query}){
      
      try { 
        const resp = await Api.fetchPhotosPerPage(page,query)
        console.log('second fetch :', resp,query,page)
        commit('SET_PHOTOS', resp.photos)
        commit('TOTAL_PHOTOS', resp.total_results)
        commit('SET_CURRENT_PAGE', resp.page)
      } catch (error) {
        console.log(error); 
      }
    }
  },

  getters:{
    getPhotos:(state) => state.photos,
    getTotalPhotos:(state) => state.totalPhotos,
    getSearch:(state) => state.search,
    getCurrentPage:(state) => state.currentPage
  },
  modules: {
  }
})


