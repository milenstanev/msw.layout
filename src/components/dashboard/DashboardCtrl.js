class DashboardCtrl {
  /**
   * @param {DashboardSvc} DashboardSvc
   * @param {material.components.dialog} $mdDialog
   */
  constructor(DashboardSvc, $mdDialog, $timeout) {
    this.$mdDialog = $mdDialog;
    this.dashboardSvc = DashboardSvc;
    this.dashboards = this.dashboardSvc.dashboards;

    //this.createDashboard = DashboardSvc.createDashboard;
    this.activateDashboard = DashboardSvc.activateDashboard;
    this.addComponent = DashboardSvc.addComponent;

    this.col1 = 100;
    this.col2 = 0;

    $timeout(
      (ctx) => {
        ctx.col1 = 50;
        ctx.col2 = 50;
      }, 0, true, this
    );
  }

  createDashboard(ev) {
    let ctx = this;
    let confirm = this.$mdDialog.prompt()
      .title('Please fill dashboard name')
      //.textContent('Bowser is a common name.')
      .placeholder('Dashboard name')
      .ariaLabel('Dashboard name')
      .initialValue('')
      .targetEvent(ev)
      .ok('Create')
      .cancel('Cancel');

    this.$mdDialog.show(confirm).then(function(DashboardName) {
      ctx.dashboardSvc.createDashboard(DashboardName);
    }, function() {
      // Cancel
    });
  }
}

DashboardCtrl.$inject = ['DashboardSvc', '$mdDialog', '$timeout'];

export default DashboardCtrl;