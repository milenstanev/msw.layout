/**
 * @desc
 *  - It's designed to be used with borrowing scope!
 *      - borrowing scope: http://borrowing-scope
 *  - Find item number for object in object
 *  - If they are such object in an object collection return object collection item number otherwise undefined
 * @param {Object} obj - The object that have to be find
 * @return {number|undefined}
 * @example: import * as helpers from 'helpers'
 */
// TODO: create namespace helpers|component
export function findItemNumberForObjectInObject (obj) {
  let len = this.length

  while (len--) {
    if (typeof this[len] === 'object') {
      let objKey
      let itemsBuffer = this[len]

      for (let key in itemsBuffer) {
        objKey = Object.keys(obj)[0]

        if (objKey === key && obj[objKey] === itemsBuffer[key]) {
          return len
        }
      }
    }
  }

  return undefined
}
