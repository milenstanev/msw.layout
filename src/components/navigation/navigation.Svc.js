import DataProvider from '../DataProvider.js';


class NavigationButtonDataModel {
  constructor(text, link, type) {
    this.text = text || '';
    this.link = link || '';
    this.type = type || '';
  }
}

class NavigationSvc {
  constructor() {
    this.navigationProvider = new DataProvider();
  }

  addButton(text, link, type) {
    this.navigationProvider.push(
      new NavigationButtonDataModel(text, link, type)
    )
  }
}

NavigationSvc.$inject = [];

export default NavigationSvc;