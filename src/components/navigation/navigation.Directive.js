/**
 * @desc TODO
 * @type {{}}
 */
let scope = {};

/**
 * Directive description
 */
class NavigationDirective {
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
     * Template
     * @type {string}
     */
    this.templateUrl = 'msw-navigation.tpl.html';
    /**
     * Controller prefix in the template
     * @type {string}
     */
    this.controllerAs = 'ctrl';
    /**
     * Directive controller
     * @type {NavigationCtrl}
     */
    this.controller = 'NavigationCtrl';
  }
}

export default NavigationDirective;

