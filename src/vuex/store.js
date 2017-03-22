import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import mutations from './mutations.js'

Vue.use(Vuex)

const state = {
	baseurl: 'http://test_api.cp.buyer.2bao.org/',
	userInfo: {}
}

export default new Vuex.Store({
	actions,
	getters,
	mutations,
	state
})