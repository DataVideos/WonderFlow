export class Slot {
  /** @type {string} */
  $slotId

  static isSlot(object) {
    return object != null
        && typeof object === 'object'
        && Array.from(Object.keys(object)).includes('$slot')
  }

  static toSlotObject(object) {
    let slot = new Slot()
    Object.keys(object).forEach(k => {
      slot[k] = object[k]
    })
    return slot
  }
}