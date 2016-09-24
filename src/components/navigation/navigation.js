import angular from 'angular';

import NavigationCtrl from './navigation.Ctrl.js';
import NavigationSvc from './navigation.Svc.js';
import NavigationDirective from './navigation.Directive.js';

const navigation = angular.module('msw.navigation', []);

navigation.service('NavigationSvc', NavigationSvc);

navigation.controller('NavigationCtrl', NavigationCtrl);

navigation.directive('mswNavigation', [
  () => {
    return new NavigationDirective();
  }
]);

export default navigation;