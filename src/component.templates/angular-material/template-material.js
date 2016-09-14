import angular from 'angular';
import 'angular-material';

import {
  componentConfig
} from '../../component.config/component.config.js';

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

export default componentTemplate;
