angular.module('drupalIonicAngularJSAPIClient.configuration', [])
        .constant('DrupalAPISettings', {

          
           roles :[
               'anonymous user',
               'authenticated user',
               'administrator'],

           accessLevels : {
               'public' : "*",
               'anon': ['anonymous user'],
               'user' : ['authenticated user', 'administrator'],
               'admin': ['admin']
           },      
          
          terms_and_conditions_nid: 1,
        });

        