/**
 * Created by milenstanev on 8/31/16.
 * Component Name
 * The are should be only those dependencies: 'config', 'component' and 'angular-mocks'.
 *  - If they are more, for sure something going wrong!
 */
import * as config from './component.config/componentConfig.js';
import { default as component } from './component.js';
import 'angular-mocks';

describe(`${config.COMPONENT_NAME} Controller:`, function () {
  'use strict';
  let ctrl;

  beforeEach(angular.mock.module(component.name));

  beforeEach(angular.mock.inject(function (_$controller_) {
    ctrl = _$controller_(`${config.COMPONENT_NAME}Ctrl`);
  }));

  it(`${config.COMPONENT_NAME}Ctrl`, () => {
    expect(ctrl.dataProvider).toBeDefined();
    expect(typeof ctrl.dataProvider === 'object').toBe(true);
  });

});