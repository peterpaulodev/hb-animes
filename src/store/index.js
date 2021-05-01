import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
import func from '../functions'

Vue.use(Vuex)

const jikanUrl = 'https://api.jikan.moe/v3'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getSeasonAnimes(){
      return new Promise((resolve, reject) => {
        axios
            .get(`${jikanUrl}/season/${moment().format('YYYY')}/${func().getSeason()}`)
            .then(response => (resolve(response)))
            .catch(err => (reject(err)))
      })
    }
  },
  modules: {
  }
})
