import * as types from "./types"

export function startGame() {
  return {
    type: types.START_GAME,
  }
}

export function resetGame() {
  return {
    type: types.RESET_GAME,
  }
}
