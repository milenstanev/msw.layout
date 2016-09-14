import * as componentConfig from './constants.js';

/**
 * @example Result will be: <prefix-component></prefix-component>
 * @type {string}
 */
const directiveStr = `<${componentConfig.DIRECTIVE_NAME}></${componentConfig.DIRECTIVE_NAME}>`;
/**
 * @type {Function} - {angular.Module#constant} resource
 * @param $stateProvider
 */
function componentRoutes ($stateProvider) {
  /*$stateProvider
    .state('home', {
      url: '/home',
      template: directiveStr
    });*/

  //return $urlRouterProvider.otherwise('/home')
}

componentRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export {
  componentRoutes,
  componentConfig
};

