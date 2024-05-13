// eslint-disable-next-line
import { AlignConstraint } from '@/utils/entities/AlignConstraint';
import { Animation } from '@/utils/entities-core/Animation'

class Context {
  /** @type {(number|string)} */
  ctxId
  /** @type {string} */
  ctxName
  /** @type {d3.Selection} */
  container
  /** @type {string} */
  text
  /** @type {Animation} */
  animation
  /** @type {array} */
  templateUsage
  /** @type {object} */
  refinements
  /** @type {object} */
  constraints
  /** @type {AlignConstraint[]} */
  alignConstraints

  timeline

  constructor(ctxId, container, animation=null, text='', refinements=[], constraints=[], alignConstraints=[]) {
    this.ctxId = ctxId
    this.container = container
    this.text = text
    this.templateUsage = []
    this.animation = animation || new Animation()
    this.refinements = refinements
    this.constraints = constraints
    this.alignConstraints = alignConstraints
  }

  /**
   * @param {AnimationTemplate} aniTemplate
   */
  addTemplate(aniTemplate) {
    let animation = aniTemplate.animationGen()
    animation.aniUnits.forEach(aniUnit => {
      this.animation.addAniUnit(aniUnit)
    })
  }

  emptyAnimation() {
    this.animation = new Animation()
  }

  getAnimationJsonObj() {
    return this.animation.toJsonObj()
  }
}

export {
  Context
}
