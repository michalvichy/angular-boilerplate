import angular from 'angular';
import AppComponent from './app.component';

export default angular.module('views.root', [])
  .component('app', AppComponent)
  .name;
