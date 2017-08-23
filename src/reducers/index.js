import { combineReducers } from "redux"
import game from "./game"
import runners from "./runners"
import tables from "./tables"
import timer from "./timer"

const rootReducer = combineReducers({
  game,
  runners,
  tables,
  timer,
})

export default rootReducer
