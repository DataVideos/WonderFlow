/**
 * @param {object} object
 * @param {function(key: any, item: object, parent: object): boolean} func
 */
function traversalObject(object, func) {
  if (object == null) return
  traversalObjectRecursively(object, func)
}

/**
 * @param {object} object
 * @param {function(key: any, item: object, parent: object): boolean} func
 * @returns {boolean} Not to traversal if return true
 */
function traversalObjectRecursively(object, func) {
  if (object == null || typeof object !== 'object') return false
  // console.log(object)
  for (let key of Object.keys(object)) {
    const item = object[key]
    let terminate = func(key, item, object)
    if (terminate) return true
    traversalObjectRecursively(item, func)
  }
  return false
}

export const ObjectUtils = {
  traversalObject
}