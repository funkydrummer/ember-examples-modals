//= require jquery
//= require jquery_ujs
//= require handlebars
//= require ember
//= require ember-data
//= require_self
//= require modal

App = Ember.Application.create({
      LOG_TRANSITIONS: true, 
    });

App.ApplicationAdapter = DS.ActiveModelAdapter;

