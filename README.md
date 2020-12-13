# debenstack-profile
Profile website wrapped inside of a docker container. To be used with the debenstack framework

Currently the project has the following dependencies:

* Sailjs v0.11.5
* Sailjs MySQL Driver
* Angularjs
* MaterializeCSS

# Setup

## Sailjs / Angularjs Stack
1. cd to `assets`
2. execute `bower install` to install bower components and dependencies
3. within the folder create a `config.js` file with the following information:

````javascript
 (function(){

     var app = angular.module('myApp');

     app.constant('BASEURL', ''); //leave as empty string
     app.constant('USERID', '1'); //id of user once created in sails api

     app.constant('GHOSTID', "ghost-frontend");
     app.constant("GHOSTSECRET", "<ghost-frontend-secret>");

 }());
````
This will allow the Angularjs client to search for the correct information
in the sails API and also talk to the ghost-blog API

To setup the ghost-blog with the angularjs profile site may take a number of steps depending on the version. The current
version 0.11.3 requires DB adjustments be made in order to allow angularjs to access the ghost-blog public api. The following
links may be of use:

* [http://api.ghost.org/docs/client-authentication](http://api.ghost.org/docs/client-authentication)
* [http://api.ghost.org/docs/ajax-calls-from-an-external-website](http://api.ghost.org/docs/ajax-calls-from-an-external-website)
* [http://support.ghost.org/public-api-beta/](http://support.ghost.org/public-api-beta/)

Basically, you will need to go into the ghost-blog database and add the domain of the angularjs site as a valid domain.
You will then need to get the secret key from the database for the ghost-frontend client and add it into the `config.js`
file explained above.

4. cd to the parent folder
5. execute `npm install sails -g` - If you are running in production, this is not necessary. Only needed for development
6. execute `npm install`
7. You may also have to install the MySQL Sailjs driver: `npm install sails-mysql`
8. cd to the `config` folder and create a `local.js` file. Add
the following configuration for sendgrid:

````javascript
module.exports.local = {
  sendgrid: {
    apikey: "<your sendgrid api key>",
    toemail: "<email your emails will be sent to on the contact page>"
  }
}
````
This will be used to send emails on the contact page of the site

10. cd to the `env` folder within the current folder and create both a `production.js`
and `development.js` file. Fill each file with the appropriate information listed
below

````javascript
/** config/env/development.js **/
    module.exports = {
        models: {
            connection: 'mysqlDBServer',
            migrate: 'safe'
          },
          connections: {
            mysqlDBServer : {
            adapter: "sails-mysql",
            host: '<host url>',
            user: '<mysql username>',
            password: '<mysql password>',
            database: '<mysql database>'
          },
          cors: {
            origin: '*'
          },
          log: {
            level: 'silly'
          },
    };
````

````javascript
/** config/env/production.js **/
    module.exports = {
        models: {
            connection: 'mysqlDBServer',
            migrate: 'safe'
          },
          connections: {
             mysqlDBServer : {
                adapter: "sails-mysql",
                host: '<host url>',
                user: '<mysql username>',
                password: '<mysql password>',
                database: '<mysql database>'
          },
          //set the production environment port
          port: 8050,
          //set which ip to listen on
          host: 'localhost' // or 127.0.0.1 or 192.168.0.123 etc

          //set logging level. usualy silent for production
          log: {
            level: 'verbose'
          },
          cors: {
            origin: '<your domain>'
          }
    };
````

11. cd to the project root
12. execute `sails lift` to start the entire stack in development mode. Append `--prod` to the end to load in prod mode
13. Or run with docker and docker-compose by executing `docker-compose up --build`
