import DataProvider from './components/DataProvider.js';
import ViewDataModel from './layout.templates/shared/component.template.ViewDataModel.js';

/**
 * @desc ComponentSvc description
 */
class ComponentSvc {
  constructor ($q, $window, $timeout) {
    this.$q = $q;
    this.$timeout = $timeout;

    /**
     * @desc viewData have to contain view data
     * @type {ViewDataModel}
     */
    this.viewData = new ViewDataModel();

    //this.mainLayout = new MainLayoutSvc($window, $timeout);
    this.$mswLayoutContent = undefined;
  }

  init() {

  }
}

ComponentSvc.$inject = ['$q', '$window', '$timeout'];

export default ComponentSvc;
