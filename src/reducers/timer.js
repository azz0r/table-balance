const initialState = {
  isOn: false,
  time: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        isOn: true,
        offset: action.offset,
      }

    case "STOP_TIMER":
      return {
        ...initialState,
      }

    case "TICK":
      return {
        ...state,
        time: state.time + (action.time - state.offset),
        offset: action.time,
      }

    default:
      return state
  }
}
