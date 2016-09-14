/**
 * @desc Component controller constructor
 */
class ComponentCtrl {
  /**
   * @desc Constructor
   * @param {angular.Module#service} coreSvc - Contain {DataProvider} instance which wrapp view data
   * @param {angular.$scope} $scope
   */
  constructor (coreSvc) {
    /**
     * @desc viewData
     *  - Contain
     * @property {DataProvider} Name - Description of the {DataProvider}
     * @type {DataProvider}
     */
    this.viewData = coreSvc.viewData;

    this.birthday = new Date();
  }
  /**
   * @desc This method will remove all records from {{ctrl.viewData}}
   */
  removeData () {
    // this.viewData.removeAll()
    this.viewData.removeObjectByRef(this.viewData[1]);
    // this.viewData.removeString('1')
    // this.viewData.removeByObjectInObject({asd: 'asd2'})
  }
}

ComponentCtrl.$inject = ['coreSvc'];

export default ComponentCtrl;

