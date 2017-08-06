import { combineReducers } from "redux"
import game from "./game"
import timer from "./timer"

const rootReducer = combineReducers({
  game,
  timer,
})

export default rootReducer
