import Model from "./table.model"

const defaultState = []

export default (state = defaultState, action) => {
  state = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case "RESET":
    case "RESET_GAME":
      state = defaultState
      break
  }

  return state.map(item => new Model(item).toJSON())
}
