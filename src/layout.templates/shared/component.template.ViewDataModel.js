import DataProvider from '../../components/DataProvider.js';

class ViewDataModel {
  constructor() {
    this.height = 0;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    this._height = height;
  }
}

export default ViewDataModel;
