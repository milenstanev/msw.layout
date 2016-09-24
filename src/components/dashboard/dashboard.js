import angular from 'angular';

import DashboardSvc from './DashboardSvc.js';
import DashboardCtrl from './DashboardCtrl.js';
import directiveHtml from './dashboard.html!text';

const dashboard = angular.module('msw.dashboard', []);

dashboard.service('DashboardSvc', DashboardSvc);

dashboard.controller('DashboardCtrl', DashboardCtrl);

/**
 * Widgets Placeholder - loading directives
 */
dashboard.directive('mswComponent', [
  '$compile',
  ($compile) => {
    return {
      scope: {
        directiveName: '='
      },
      link: (scope, element) => {
        element.append(`<div ${scope.directiveName}>btn</div>`);
        $compile(element.contents())(scope);
      }
    }
  }
]);

dashboard.directive('mswDashboard', [
  '$window', 'LayoutMaterialSvc',
  ($window, LayoutMaterialSvc) => {

    let directive = {
      controller: 'DashboardCtrl',
      controllerAs: 'ctrl',
      template: directiveHtml,
      link: (scope, element, attrs) => {
        LayoutMaterialSvc.onChangeHeight(() => {
          element[0].style.height = $window.innerHeight - element[0].offsetTop - LayoutMaterialSvc.$mswBottomBar.offsetHeight + 'px';
        });
      }
    };

    return directive;
  }
]);

export default dashboard;