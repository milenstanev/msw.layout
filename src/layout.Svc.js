import DataProvider from './components/DataProvider.js';
import ViewDataModel from './layout.templates/shared/component.template.ViewDataModel.js';

let windowResize;

class MainLayout {
  constructor($window, $timeout) {
    this.$window = $window;
    this.$timeout = $timeout;

    this._onReady = [];
    this.isReady = false;
    this._height = 0;
    this._$mswTopBar = undefined;
    this._$mswBottomBar = undefined;
    this._$mswLayoutContent = undefined;

    $window.onresize = () => {
      if(windowResize) {
        $window.clearTimeout(windowResize);
      }

      windowResize = setTimeout((ctx) => {
        ctx.constructor.areAllDefined.call(ctx);
      }, 100, this);
    };
  }

  get $mswTopBar() {
    return this._$mswTopBar;
  }
  set $mswTopBar(selector) {
    this._$mswTopBar = selector;
    this.constructor.areAllDefined.call(this);
  }

  get $mswBottomBar() {
    return this._$mswBottomBar;
  }
  set $mswBottomBar(selector) {
    this._$mswBottomBar = selector;
    this.constructor.areAllDefined.call(this);
  }

  get $mswLayoutContent() {
    return this._$mswLayoutContent;
  }
  set $mswLayoutContent(selector) {
    this._$mswLayoutContent = selector;
    this.constructor.areAllDefined.call(this);
  }

  get height() {
    return this._height;
  }
  set height(height) {
    this._height = height;

    this.onChangeHeight();
  }

  onChangeHeight(onReady) {
    if(onReady) {
      this._onReady.push(onReady);
    }

    if(this.height) {
      let len = this.$mswLayoutContent.children.length - 1;

      while (len--) {
        this.$mswLayoutContent.children[len].style.height = `${this.height}px`;
      }

      this.isReady = true;

      this._onReady.forEach((item) => {
        item.call()
      });
    }
  }

  calcMainLayoutHeight() {
    this.$timeout(() => {
      this.height = this.$window.innerHeight - this.$mswLayoutContent.offsetTop - this.$mswBottomBar.offsetHeight;
    }, 0, true, this);
  }

  static areAllDefined() {
    if(this._$mswTopBar && this._$mswBottomBar && this._$mswLayoutContent) {
      this.calcMainLayoutHeight();
    }
  }
}

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

    this.mainLayout = new MainLayout($window, $timeout);
    this.$mswLayoutContent = undefined;
  }

  init() {

  }
}

ComponentSvc.$inject = ['$q', '$window', '$timeout'];

export default ComponentSvc;
