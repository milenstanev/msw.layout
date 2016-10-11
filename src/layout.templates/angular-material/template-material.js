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

componentTemplate.config(['$mdThemingProvider', ($mdThemingProvider) => {
  /*$mdThemingProvider.theme('altTheme')
    .primaryPalette('purple') // specify primary color, all
  // other color intentions will be inherited
  // from default
  //$mdThemingProvider.setDefaultTheme('altTheme');*/

  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  // Plates:
  // red,
  // pink,
  // purple,
  // deep-purple,
  // indigo,
  // blue,
  // light-blue,
  // cyan,
  // teal,
  // green,
  // light-green,
  // lime,
  // yellow,
  // amber,
  // orange,
  // deep-orange,
  // brown,
  // grey,
  // blue-grey

  $mdThemingProvider.definePalette('amazingPaletteName', {
    '50': 'ffebee',
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
      '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('dark-grey')
    .primaryPalette('grey')
    .dark();

  $mdThemingProvider.theme('dark-grey-2')
    .primaryPalette('amazingPaletteName')
    .dark();

  $mdThemingProvider.theme('dark-orange')
    .primaryPalette('orange')
    .dark();

  $mdThemingProvider.setDefaultTheme('dark-grey');
}]);

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
