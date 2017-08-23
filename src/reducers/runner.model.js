import BaseModel from "./base.model"

export default class extends BaseModel {
  defaults() {
    return {
      id: false,
      name: "John Doe",
      isCleaning: false,
      isFree: false,
      isOnBreak: false,
      busyOnTableId: null,
      breakTimeStart: 0,
      breakTimeEnd: 0,
      shiftStart: 0,
      shiftEnd: 0,
      costPerHour: 25,
    }
  }
}
