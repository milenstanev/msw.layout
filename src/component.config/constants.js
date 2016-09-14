/**************************************************
 *** @namespace general component settings
 **************************************************/
/**
 * @desc Name space of this component
 * @example app.feature, app will be the component {angular.Module} which will use as dependency this component.
 * @type {string}
 */
export const NAMESPACE = 'msw';
/**
 * @desc Component name
 * @type {string}
 */
export const COMPONENT_NAME = `core`;
/**
 * @desc Component name caps
 * @type {string}
 */
export const COMPONENT_NAME_CAPS = 'Core';
/**
 * @desc
 * @type {string}
 */
export const DIRECTIVE_NAME = `${NAMESPACE}-${COMPONENT_NAME}`;
/**
 *
 * @type {string}
 */
export const DIRECTIVE_NAME_CAPS = `${NAMESPACE}${COMPONENT_NAME_CAPS}`;
/**
 *
 * @type {string}
 */
export const SERVICE_NAME = `${COMPONENT_NAME}Svc`;
/**
 *
 * @type {string}
 */
export const CONTROLLER_NAME = `${COMPONENT_NAME_CAPS}Ctrl`;
/**
 *
 * @type {string}
 */
export const COMPONENT_CONFIG_NAME = `${COMPONENT_NAME}Settings`;
/**
 *
 * @type {string}
 */
export const COMPONENT_TEMPLATE_COMPONENT = `${COMPONENT_NAME}.template`;
/**
 *
 * @type {string}
 */
export const COMPONENT_TEMPLATE_NAME = `${COMPONENT_NAME}Html`;