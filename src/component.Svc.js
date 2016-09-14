import DataProvider from './components/DataProvider.js';
import viewDataModel from './component.templates/shared/component.template.ViewDataModel.js';

/**
 * ComponentSvc
 * @desc ComponentSvc description
 */
class ComponentSvc {
  constructor ($q) {
    this.$q = $q;

    /**
     * @desc viewData have to contain view data
     * @type {DataProvider}
     */
    this.viewData = viewDataModel.viewData;
    //this.viewData = [];

    this.init();
  }

  /**
   * @desc
   *  - Instantiate the service
   *  - Doing new instance of {ComponentDataModel} and put it in {this.viewData}
   */
  init() {
    this.viewData.onPush = (data) => {
      if (!data) {
        this.viewData.removeString();
      }
    };

    /* this.viewData.push(new ComponentDataModel())
     this.viewData.push(new ComponentDataModel())
     this.viewData.push(new ComponentDataModel()) */

    /* this.viewData.push('1')
     this.viewData.push('2')
     this.viewData.push('3') */

    /*this.viewData.push({asd: 'asd 1', qwe: 'qwe'});
     this.viewData.push({asd: 'asd 2', qwe: 'qwe'});
     this.viewData.push({asd: 'asd 3', qwe: 'qwe'});*/

    this.getApiData().then(
      (res) => {
        this.constructor.assignApiData.call(
          this, this.constructor.processBeforeAssign.call(this, res)
        );
      },
      (error) => {
        // TODO: Error state in the view data model
      }
    );
  }

  getApiData() {
    /**
     * @type {ng.$q}
     */
    let deferred = this.$q.defer();
    /**
     * Mocked API response
     * @type {*[]}
     */
    let apiData = [
      {
        itemTitle: 'Feature name',
        itemDescription: 'Feature description .etc',
        isEnabled: false
      },
      {
        itemTitle: 'Feature name',
        itemDescription: 'Feature description .etc',
        isEnabled: false
      }
    ];

    setTimeout((deferred) => {
      deferred.resolve(apiData);
    }, 1000, deferred);

    return deferred.promise;
  }

  static processBeforeAssign(data) {
    return data;
  }

  static assignApiData(apiData) {
    /**
     * Map API response to our view data model
     */
    let dataBuffer;

    apiData.map(
      (apiItem) => {
        dataBuffer = viewDataModel.getViewItemDataModel();
        /* Depends on api response! */
        dataBuffer.title = apiItem.itemTitle;
        dataBuffer.description = apiItem.itemDescription;
        dataBuffer.isActive = apiItem.isEnabled;

        this.viewData.push(dataBuffer);
      }
    );
  }
}

ComponentSvc.$inject = ['$q'];

export default ComponentSvc;
