class DashboardCtrl {
  /**
   * @param DashboardSvc {DashboardSvc}
   */
  constructor(DashboardSvc) {
    this.dashboardSvc = DashboardSvc;
    this.dashboards = this.dashboardSvc.dashboards;

    this.createDashboard = DashboardSvc.createDashboard;
    this.activateDashboard = DashboardSvc.activateDashboard;
  }

  addComponent() {
    this.dashboardSvc.addComponent('md-button');
  }
}

DashboardCtrl.$inject = ['DashboardSvc'];

export default DashboardCtrl;