import angular from 'angular';

/**
 * @desc Component controller constructor
 */
class ComponentCtrl {
  /**
   *
   * @param {ng.$window} $window
   * @param {ng.$scope} $scope
   * @param @type{ComponentSvc} layoutSvc
   */
  constructor ($window, $scope, layoutSvc) {
    this.domEl = undefined;
    this.$window = $window;
    this.$scope = $scope;
    this.service = layoutSvc;

    this.init();
  }

  /**
   *
   */
  init() {
    let self = this,
      timeout;

    function callLayoutChange() {
      if(timeout) {
        self.$window.clearTimeout(timeout);
      }

      timeout = self.$window.setTimeout((self) => {
        self.layoutChange();
      }, 300, self);
    }

    this.$window.addEventListener('resize', callLayoutChange);

    this.$scope.$on('$destroy', () => {
      this.$window.removeEventListener('resize', callLayoutChange);
    });
  }

  /**
   *
   */
  layoutChange() {
    this.service.height = this.$window.innerHeight - this.domEl.previousElementSibling.offsetHeight - this.domEl.nextElementSibling.offsetHeight;
    this.domEl.style.height =  `${this.service.height}px`;
  }
}

ComponentCtrl.$inject = ['$window', '$scope', 'layoutSvc'];

export default ComponentCtrl;

