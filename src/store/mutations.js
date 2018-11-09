import * as type from './mutations-type'

export default {
  [type.TOGGLE_USERINFOBOX] (state, payload) {
    state.hasUserInfoBox = payload.status
  }
}
