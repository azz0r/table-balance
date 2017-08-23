import BaseModel from "./base.model"

export default class extends BaseModel {
  defaults() {
    return {
      table: {
        amount: 8,
        diners: {
          min: 1,
          max: 10,
        },
        cleanTimePerDiner: 100,
        eatingTimePerDiner: 200,
      },
    }
  }
}
