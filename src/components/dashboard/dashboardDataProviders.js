import DataProvider from '../DataProvider.js';

/**
 * @typedef {guid}
 * @returns {guid}
 */
function getGuid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

class ComponentDataModel {
  constructor() {
    this.name = '';
    this.directiveName = '';
    /**
     * @desc Possible types
     *  - grid
     *  - window
     * @type {string}
     */
    this.type = '';
  }
}

class DashboardDataModel {
  constructor(name) {
    /**
     * Unique id
     * @type {guid}
     */
    this.id         = getGuid();
    /**
     * View name
     * @type {string}
     */
    this.name       = name || '';
    /**
     * Dashboard components data buffer
     * @type {DataProvider}
     */
    this.components = new DataProvider();
    /**
     * Is the active one
     * @type {boolean}
     * @private
     */
    this._isActive   = false;
  }

  //region *** get/set isActive ***
  /**
   * getter isActive
   * @returns {boolean|*}
   */
  get isActive() {
    return this._isActive;
  }
  //noinspection JSAnnotator
  /**
   * setter isActive
   * @param {boolean} active
   */
  set isActive(active) {
    if(typeof active === "boolean") {
      this._isActive = active;
    } else {
      throw new Error('The assigned value have to be boolean!');
    }
  }
  //endregion
}

export {
  ComponentDataModel, DashboardDataModel
}