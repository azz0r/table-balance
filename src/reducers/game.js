const defaultState = {}

export default (state = defaultState, action) => {
  state = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case "RESET":
    case "RESET_GAME":
      state = defaultState
      break
    case "START_GAME":
      state.started = true
      break
  }

  return state
}
