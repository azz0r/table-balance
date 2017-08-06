import * as types from "./types"

export function startTimer() {
  return {
    type: types.START_TIMER,
    offset: Date.now(),
  }
}

export function tick() {
  return {
    type: types.TICK,
    time: Date.now(),
  }
}

export function stopTimer() {
  return {
    type: types.STOP_TIMER,
  }
}
