import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryInit:'africans',    
    photos:[],
    totalPhotos:null,
    search:'africans',
    currentPage:1,
    loading: false,
    searchEnd: false
  },
  mutations: {
    SET_PHOTOS:(state, data) => state.photos = data,
    SET_SEARCH: (state, search) => {
      state.search = search
    },
    TOTAL_PHOTOS:(state, data) => state.totalPhotos = data,
    SET_CURRENT_PAGE: (state,data) => state.currentPage = data,
    SET_LOADING: (state, data) =>state.loading = data,
    SET_SEARCH_END: (state, data) =>state.searchEnd = data
  },
  actions: {

    async fetchPhotos({commit},query,page){
      commit('SET_LOADING', true)
      commit('SET_SEARCH_END', false)
      try {
        const resp = await Api.fetchPhotos(query,page);
        console.log(resp)
        const photos = await resp.photos
        commit('SET_PHOTOS', photos)
        commit('TOTAL_PHOTOS', resp.total_results)
        commit('SET_LOADING', false)
      commit('SET_SEARCH_END', true)
        // return photos
      } catch (error) {
        console.log(error)
      commit('SET_LOADING', false)
      commit('SET_SEARCH_END', true)
      }
    },
    async fetchPhotosPerPag({commit}, {page,query}){
      commit('SET_LOADING', true)
      
      try { 
        const resp = await Api.fetchPhotosPerPage(page,query)
        console.log('second fetch :', resp,query,page)
        commit('SET_PHOTOS', resp.photos)
        commit('TOTAL_PHOTOS', resp.total_results)
        commit('SET_CURRENT_PAGE', resp.page)
        commit('SET_LOADING', false)
      } catch (error) {
        console.log(error); 
      commit('SET_LOADING', false)
      }
    }
  },

  getters:{
    getPhotos:(state) => state.photos,
    getTotalPhotos:(state) => state.totalPhotos,
    getSearch:(state) => state.search,
    getCurrentPage:(state) => state.currentPage,
    getLoading: (state) => state.loading,
    getSearchend: (state) => state.searchEnd
  },
  modules: {
  }
})


