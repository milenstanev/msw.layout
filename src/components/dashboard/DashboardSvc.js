import DataProvider from '../DataProvider.js';
import {
  ComponentDataModel, DashboardDataModel
} from './dashboardDataProviders.js';


class DashboardSvc {
  constructor() {
    this.isEnabled = false;

    /**
     * @type {DataProvider}
     */
    this.dashboards = this.dashboards || new DataProvider();

    this.createDashboard('Test 1', true);
    this.addComponent('Test', 'grid', '<md-calendar ng-model="asd"></md-calendar> {{asd | date}}');
    this.addComponent('Test', 'grid', '<md-button>Text</md-button>');
  }

  /**
   *
   * @param {guid} id
   */
  activateDashboard(id) {
    /**
     * @type {DashboardDataModel}
     */
    let item;

    this.dashboards.forEach((item) => {
      if(item.id === id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
    });
  }

  /**
   * @param {string} name
   * @param {boolean} [isActive]
   */
  createDashboard(name, isActive) {
    let newDashboard = new DashboardDataModel(name);

    if(isActive) {
      newDashboard.isActive = true;
    }

    this.dashboards.push(newDashboard);
  }

  /**
   * @param {string} name
   * @param {string} type
   * @param {string} directiveName
   */
  addComponent(name, type, directiveName) {
    /**
     * @type {DashboardDataModel}
     */
    let dashboard = this.constructor.getActiveDashboard.call(this);

    if(dashboard && name && type && directiveName) {
      /**
       * @type {ComponentDataModel}
       */
      let component = new ComponentDataModel();

      component.name = name;
      component.directiveName = directiveName;
      component.type = type;


      dashboard.components.push(component);
    } else {
      console.error('They are not all params')
    }
  }

  /**
   * Return the active dashboard
   * @returns {*}
   */
  static getActiveDashboard() {
    function active(item) {
      return item.isActive === true;
    };

    return this.dashboards.find(active);
  }
}

export default DashboardSvc;