import { componentConfig } from './component.config/component.config.js';

/**
 * @desc TODO
 * @type {{}}
 */
let scope = {};

/**
 * Directive description
 */
class ComponentDirective {
  /**
   * Constructor description | directive settings
   */
  constructor () {
    /**
     * Description
     * @type {angular.$scope}
     */
    this.scope = scope;

    /**
     * Controller prefix in the template
     * @type {string}
     */
    this.controllerAs = 'ctrl';
    /**
     * Directive template
     * @type {html}
     */
    this.templateUrl = componentConfig.COMPONENT_TEMPLATE_NAME;
    /**
     * Directive controller
     * @type {angular.Module#controller}
     */
    this.controller = componentConfig.CONTROLLER_NAME;

    this.link = (scope, element, attrs, ctrl) => {};
  }
}

export default ComponentDirective;

