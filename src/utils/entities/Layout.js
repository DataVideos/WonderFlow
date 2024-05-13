class Layout {
  containerWidth
  containerHeight
  topRatio
  bottomRatio
  leftRatio
  rightRatio
  barWidthRatio
  barHeightRatio

  origin
  top
  bottom
  left
  right
  chartHeight
  chartWidth
  colWidth
  barWidth
  barOffset

  constructor({containerWidth, containerHeight, topRatio, bottomRatio, 
      leftRatio, rightRatio, barWidthRatio, barHeightRatio}) {
    this.containerWidth = containerWidth
    this.containerHeight = containerHeight
    this.topRatio = topRatio
    this.bottomRatio = bottomRatio
    this.leftRatio = leftRatio
    this.rightRatio = rightRatio
    this.barWidthRatio = barWidthRatio
    this.barHeightRatio = barHeightRatio
    this.initLayout()
  }

  initLayout() {
    this.origin = {
      x: this.containerWidth * this.leftRatio,
      y: this.containerHeight * (1 - this.bottomRatio)
    }
    this.top = this.containerHeight * this.topRatio
    this.bottom = this.containerHeight * this.bottomRatio
    this.left = this.containerWidth * this.leftRatio
    this.right = this.containerWidth * this.rightRatio

    this.chartHeight = this.containerHeight - this.top - this.bottom
    this.chartWidth = this.containerWidth - this.left - this.right
  }

  computeBarLayout(barNumber) {
    this.colWidth = this.chartWidth / barNumber
    this.barWidth = this.colWidth * this.barWidthRatio
    this.barOffset = (this.colWidth - this.barWidth) / 2
  }
}

export {
  Layout
}