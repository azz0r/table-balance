import BaseModel from "./base.model"

export default class extends BaseModel {
  defaults() {
    return {
      id: false,
      cleanTimeStart: 0,
      cleanTimeEnd: 0,
      isDirty: false,
      isBeingCleaned: false,
      totalAmountOfOrders: 0,
    }
  }
}
