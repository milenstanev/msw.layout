import angular from 'angular'
// TODO: component at helpers level
import * as helpers from './helpers.js'

/**
 * @desc
 *  - Data Provider
 *  - Extends regular array in order to provide augmented methods and properties
 * @typedef {DataProvider} DataProvider
 */
class DataProvider extends Array {
  /**
   * @desc Remove all items from collection
   */
  removeAll () {
    while (this.length) {
      this.shift()
    }
    return this
  }

  /**
   * @desc Remove string
   */
  removeString (arg) {
    let isAnyItem = this.indexOf(arg)

    if (isAnyItem !== -1) {
      return this.splice(isAnyItem, 1)
    } else {
      return undefined
    }
  }

  /**
   * @desc Remove object by reference or deep copy
   * @param {Object} obj {}
   */
  removeObjectByRef (obj) {
    let len = this.length

    while (len--) {
      if (angular.equals(this[len], obj)) return this.splice(len, 1)
    }

    return undefined
  }

  /**
   * @desc Remove object by object in object
   * @param {object} obj
   * @example {prop: 'value'} from [{prop: 'value', other: 'value'}, {prop: 'value2', other: 'value2'}]
   */
  removeByObjectInObject (obj) {
    let itemNumber = this.findItemNumberForObjectInObject(obj)

    if (itemNumber) {
      return this.splice(itemNumber, 1)
    } else {
      return undefined
    }
  }

  /**
   * Find item number for object in object
   * @param {object} obj
   * @example {prop: 'value'} from [{prop: 'value', other: 'value'}, {prop: 'value2', other: 'value2'}]
   * @returns {number}
   */
  findItemNumberForObjectInObject (obj) {
    let itemNumber = helpers.findItemNumberForObjectInObject.call(this, obj)

    helpers

    if (itemNumber) return itemNumber
  }

  /**
   * It's defined to be overwrite if it's necessary
   * @abstract
   */
  onPush (data) { }

  /**
   * @desc It's defined for abstract method {onPush}
   * @param data
   */
  push (data) {
    super.push(data)
    this.onPush(data)
  }
}

export default DataProvider
