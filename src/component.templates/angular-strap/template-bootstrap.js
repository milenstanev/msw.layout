import angular from 'angular';
import 'mgcrea/angular-strap';
import 'angular/bower-angular-animate';
import 'twbs/bootstrap/css/bootstrap.css!';

import {
  componentConfig
} from '../../component.config/component.config.js';
import componentHtml from './template-name-bootstrap.html!text';
import componentCss from './template-name-bootstrap.css!';

const componentTemplate = angular.module(`${componentConfig.COMPONENT_TEMPLATE_COMPONENT}`, [
  'ngAnimate',
  'mgcrea.ngStrap'
]);

//TODO: some kind of expected view data model

componentTemplate.run([
  '$templateCache',
  ($templateCache) => {
    $templateCache.put(componentConfig.COMPONENT_TEMPLATE_NAME, componentHtml);
  }
]);

export default componentTemplate;

