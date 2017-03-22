import * as types from './mutation-types.js'

export const userInfo = ({commit}) => {
	commit(types.DISPATCH_USERINFO, preload)
}