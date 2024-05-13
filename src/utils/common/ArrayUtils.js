/**
 * @param {any[]} array
 * @param {any} item
 */
function removeItem(array, item) {
  let index = array.indexOf(item)
  if (index === -1) return false
  array.splice(index, 1)
  return true
}

function getLastItem(array) {
  let len = array.length
  if (len === 0) return null
  return array[len - 1]
}

/**
 * @param {any[]} array 
 * @param {any[]} subArray 
 * @returns {boolean}
 */
function includes(array, subArray) {
  return subArray.every(item => array.includes(item))
}

/**
 * @param {any[]} array
 * @param {number} start
 * @param {number} end Not include
 * @param {number} [step=1]
 * @returns {any[]}
 */
function slice(array, start, end, step=1) {
  let result = []
  for (let i = start; i < end; i += step) {
    result.push(array[i])
  }
  return result
}

/**
 * @param {any[]} array1
 * @param {any[]} array2
 */
function intersect(array1, array2) {
  let res = []
  array1.forEach(item => {
    if (array2.includes(item)) {
      res.push(item)
    }
  })
  return res
}

export const ArrayUtils = {
  removeItem, getLastItem, includes, slice, intersect,
}
