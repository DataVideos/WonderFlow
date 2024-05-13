class AlignConstraint {
  /** @type {string} */ word
  /** @type number */ timestamp   // in s
  /** @type {string} */ selector

  constructor(word, timestamp, selector) {
    this.word = word
    this.timestamp = timestamp
    this.selector = selector
  }
}

export {
  AlignConstraint
}
