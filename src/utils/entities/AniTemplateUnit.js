// import {gsap} from 'gsap'
// import Effect from './Effect'

// class AniTemplateUnit {
//   atuId
//   /** @type {Effect} */ effect

//   constructor(atuId, effect) {
//     this.aniUnitId =aniUnitId
//     this.target = target
//     this.effect = effect
//     this.position = position ? position : '+=0'
//     this.duration = duration ? duration : effect.defaultDuration
//     this.labels = labels
//     this.times = [0, 0]
//   }

//   appendTo(timeline, selectFunc) {
//     let target = selectFunc(this)
//     let tw
//     if (this.effect.type === 'fromTo') {
//       let from = this.effect.vars[0]
//       let to = {...this.effect.vars[1], duration: this.duration}
//       tw = gsap.fromTo(target, from, to)
//     } else {
//       let auVars = {...this.effect.vars, duration: this.duration}
//       tw = gsap[this.effect.type](target, auVars)
//     }
//     timeline.add(tw, this.position)
//     this.times[0] = tw.startTime()
//     this.times[1] = tw.endTime()
//     this.tween = tw
//     return tw
//   }

//   getReadableCopy() {
//     const exclude = ['tween', 'target', 'effect', 'times']
//     let ret = {}
//     Object.keys(this).forEach(k => {
//       if (exclude.includes(k)) return
//       ret[k] = this[k]
//     })
//     // console.log('target', this.target, this.target.getAttribute('class'))
//     ret.target = {
//       id: this.target.id,
//       "class": this.target.getAttribute('class')
//     }
//     ret.effect = this.effect.effId
//     return ret
//   }
// }

// export default AniTemplateUnit
