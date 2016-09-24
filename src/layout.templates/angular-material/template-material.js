import angular from 'angular';
import 'angular-material';

import LayoutMaterialSvc from './template-material.Service.js';
import {
  componentConfig
} from '../../layout.config/layout.config.js';

import componentHtml from './template-name-material.html!text';
import componentCss from './template-name-material.css!';

const componentTemplate = angular.module(`${componentConfig.COMPONENT_TEMPLATE_COMPONENT}`, [
  'ngMaterial'
]);

//TODO: some kind of expected view data model

componentTemplate.run([
  '$templateCache',
  ($templateCache) => {
    $templateCache.put(componentConfig.COMPONENT_TEMPLATE_NAME, componentHtml);
  }
]);

componentTemplate.service('LayoutMaterialSvc', LayoutMaterialSvc);

componentTemplate.directive('mswLayoutContent', [
  'LayoutMaterialSvc',
  /**
   * @param $timeout
   * @param LayoutMaterialSvc {LayoutMaterialSvc}
   * @returns {{link: (function(*, *, *))}}
   */
    (LayoutMaterialSvc) => {

    let directive = {
      link: (scope, element, attrs) => {
        LayoutMaterialSvc.$mswLayoutContent = element[0];
      }
    };

    return directive;
  }
]);

componentTemplate.directive('mswTopBar', [
  'LayoutMaterialSvc',
  /**
   * @param $timeout
   * @param LayoutMaterialSvc {LayoutMaterialSvc}
   * @returns {{link: (function(*, *, *))}}
   */
    (LayoutMaterialSvc) => {

    let directive = {
      link: (scope, element, attrs) => {
        LayoutMaterialSvc.$mswTopBar = element[0];
      }
    };

    return directive;
  }
]);

componentTemplate.directive('mswBottomBar', [
  'LayoutMaterialSvc',
  /**
   * @param $timeout
   * @param LayoutMaterialSvc {LayoutMaterialSvc}
   * @returns {{link: (function(*, *, *))}}
   */
    (LayoutMaterialSvc) => {

    let directive = {
      link: (scope, element, attrs) => {
        LayoutMaterialSvc.$mswBottomBar = element[0];
      }
    };

    return directive;
  }
]);

export default componentTemplate;
