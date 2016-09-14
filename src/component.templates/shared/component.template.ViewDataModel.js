import DataProvider from '../../components/DataProvider.js';
/**
 * @type {class}
 * @desc TODO...
 *  - Could be used with get/set but WebStorm help getting worse
 *  - Always can be assigned to angular service in order to became accessible in angular modules context
 */
class ViewItemDataModel {
  constructor() {
    /**
     * Feature title
     * @type {string}
     */
    this.title = '';
    /**
     * Feature description
     * @type {string}
     */
    this.description = '';
    /**
     * Is enabled
     * @type {boolean}
     */
    this.isActive = false;
  }
}

class ViewDataModel {
  constructor() {
    /**
     * Description
     * @type {DataProvider}
     */
    this.viewData = new DataProvider();
  }
  /**
   * Helper method, tobe described
   * @returns {ViewItemDataModel}
   */
  getViewItemDataModel() {
    return new ViewItemDataModel();
  }
}

export default new ViewDataModel();
