import DataProvider from './components/DataProvider.js';
import ViewDataModel from './layout.templates/shared/component.template.ViewDataModel.js';

/**
 * @desc ComponentSvc description
 */
class ComponentSvc {
  constructor ($q) {
    this.$q = $q;

    /**
     * @desc viewData have to contain view data
     * @type {ViewDataModel}
     */
    this.viewData = new ViewDataModel();
  }
}

ComponentSvc.$inject = ['$q'];

export default ComponentSvc;
