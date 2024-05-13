function deepCopy(obj) {
  if (obj === undefined || obj === null) {
    return obj
  }
  let copy = Array.isArray(obj) ? [] : {}
  for (let i in obj) {
    copy[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i]
  }
  if (obj.prototype !== undefined) {
    copy.prototype = obj.prototype
  }
  return copy
}

/** @deprecated */
function getReadableAniUnit(/** @type {AnimationUnit} */ au) {
  const exclude = ['tween', 'target', 'effect', 'times']
  let ret = {}
  Object.keys(au).forEach(k => {
    if (exclude.includes(k)) return
    ret[k] = au[k]
  })
  ret.target = {
    id: au.target["__data__"].id,
    "class": au.target["__data__"].class.join(' ')
  }
  ret.effect = au.effect.effId
  return ret
}

export {
  deepCopy, getReadableAniUnit
}
