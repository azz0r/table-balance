import reducers from "../reducers"
import reduxReset from "redux-reset"
import persistState from "redux-localstorage"
import { createStore, compose } from "redux"

const storeEnhancer = compose(
  persistState(),
  reduxReset(),
  typeof window === "object" && typeof window.devToolsExtension !== "undefined"
    ? window.devToolsExtension()
    : f => f
)

export default initialState => {
  return createStore(reducers, initialState, storeEnhancer)
}
