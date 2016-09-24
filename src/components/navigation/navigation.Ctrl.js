class NavigationCtrl {
  /**
   * @param NavigationSvc {NavigationSvc}
   */
  constructor(NavigationSvc, $location) {
    this.$location = $location;
    /**
     * @type {NavigationSvc}
     */
    this.navigationSvc = NavigationSvc;
    /**
     * @type {DataProvider}
     */
    this.navigation = this.navigationSvc.navigationProvider;


    this.init();
  }

  init() {
    this.navigationSvc.addButton('asd', '#/', '');
  }

  callToAction(button) {
    if(button.link) {
      this.$location.path(button.link);
    }
  }
}

NavigationCtrl.$inject = ['NavigationSvc', '$location'];

export default NavigationCtrl;