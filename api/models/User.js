/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes : {
    username: {
      type: 'string',
      required: true
    },
    firstname: {
      type: 'string',
      required: true
    },
    lastname: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true
    },
    projects: {
      collection: 'project',
      via: 'user'
    },
    blogs: {
      collection: 'blog',
      via: 'author'
    },
    about: {
      collection: 'about',
      via: 'user'
    }

  }
};

