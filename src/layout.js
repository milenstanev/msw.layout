import angular from 'angular';
import 'angular-ui/ui-router';

import {
  componentConfig  // configure names .etc
} from './layout.config/layout.config.js';
import ComponentSvc from './layout.Svc.js';
import ComponentCtrl from './layout.Ctrl.js';
import ComponentDirective from './layout.Directive.js';
import componentTemplate from './layout.templates/layout.template.js';

/**
 * @desc Angular module name: prefix.component, description: desc
 * @type {angular.Module} AngularModule
 *
 * @param {string} [name] - Module name
 * @param {Array} [dependencies] - Module decencies
 *
 * @example usage with directive: <div prefix-component></div>
 * @example usage with controller/template: <div ng-controller="ComponentCtrl as ctrl" ng-include="'componentHtml'"></div>
 *
 * @property {angular.Module#constant} componentSettings - Module settings
 * @property {angular.Module#run}  - Load template dependencies
 * @property {angular.Module#config} - Doing routes, resolve services .etc
 * @property {angular.Module#controller} componentCtrl - Define module controller
 * @property {angular.Module#service} componentSvc - Define module services
 * @property {angular.Module#directive} prefix-component - Define directive which can present the module view
 * @info TODO: change it somehow
 *  - The {cost} to which is assigned module instance is not good practice according good practices from @url https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#modules,
 *    but otherwise we will lose documentation
 */
const component = angular.module(`${componentConfig.NAMESPACE}.${componentConfig.COMPONENT_NAME}`, [
  'ui.router'
  , componentTemplate.name
]);

/**
 * @desc Doing overwrite/setting about UI.
 * @type {string}
 */
component.constant(componentConfig.COMPONENT_CONFIG_NAME, componentConfig);

component.controller(componentConfig.CONTROLLER_NAME, ComponentCtrl);

component.service(componentConfig.SERVICE_NAME, ComponentSvc);

component.directive(componentConfig.DIRECTIVE_NAME_CAPS, [
  () => {
    return new ComponentDirective();
  }
]);


component.directive('mswLayoutContent', [
  '$timeout', 'layoutSvc',
  /**
   * @param $timeout
   * @param layoutSvc {ComponentSvc}
   * @returns {{link: (function(*, *, *))}}
   */
  ($timeout, layoutSvc) => {

    let directive = {
      link: (scope, element, attrs) => {
        layoutSvc.$mswLayoutContent = element[0];
        layoutSvc.mainLayout.$mswLayoutContent = element[0];
      }
    };

    return directive;
  }
]);

component.directive('mswTopBar', [
  '$timeout', 'layoutSvc',
  /**
   * @param $timeout
   * @param layoutSvc {ComponentSvc}
   * @returns {{link: (function(*, *, *))}}
   */
    ($timeout, layoutSvc) => {

    let directive = {
      link: (scope, element, attrs) => {
        layoutSvc.mainLayout.$mswTopBar = element[0];
      }
    };

    return directive;
  }
]);

component.directive('mswBottomBar', [
  '$timeout', 'layoutSvc',
  /**
   * @param $timeout
   * @param layoutSvc {ComponentSvc}
   * @returns {{link: (function(*, *, *))}}
   */
    ($timeout, layoutSvc) => {

    let directive = {
      link: (scope, element, attrs) => {
        layoutSvc.mainLayout.$mswBottomBar = element[0];
      }
    };

    return directive;
  }
]);

component.directive('mswDashboard', [
  '$window', 'layoutSvc',
  ($window, layoutSvc) => {

    let directive = {
      link: (scope, element, attrs) => {
        layoutSvc.mainLayout.onChangeHeight(() => {
          element[0].style.height = $window.innerHeight - element[0].offsetTop - layoutSvc.mainLayout.$mswBottomBar.offsetHeight + 'px';
        });
      }
    };

    return directive;
  }
]);

export default component;

