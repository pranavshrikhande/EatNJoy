'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';

import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-validation-match';
import ngFileUpload from 'ng-file-upload';
import 'angularjs-toaster';

import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
// import sidebar from '../components/sidebar/sidebar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import welcome from './welcome/welcome.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
import contactus from './contactus/contactus.component';
import managecard from './managecard/managecard.component';
import reserveatable from './reserveatable/reserveatable.component';
import viewcart from './viewcart/viewcart.component';
import vieworder from './vieworder/vieworder.component';
import manageaddress from './manageaddress/manageaddress.component';
import './app.css';



angular.module('eatnjoyApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
  uiBootstrap, _Auth, account, admin, ngFileUpload, 'validation.match', navbar, footer, main, constants,
  socket, util, welcome, contactus, manageaddress, reserveatable, managecard, viewcart, vieworder, 'toaster'
])

  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';

    
    
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['eatnjoyApp'], {
      strictDi: true
    });
  });
