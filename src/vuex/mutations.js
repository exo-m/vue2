import * as types from './mutation-types.js'

const mutations = {
	[types.DISPATCH_USERINFO] (state, preload) {
		state.userInfo = preload;
	}
}

export default mutations