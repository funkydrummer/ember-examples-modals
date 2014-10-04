App.animateModalClose = function() {
  var promise = new Ember.RSVP.Promise(function(resolve) {
    Ember.run.later(function() {
      resolve({ msg: "Hold Your Horses" });
    }, App.DEFAULT_CSS_TRANSITION_DURATION_MS);
  });

  $('.modal.in').removeClass('in');
  $('.modal-backdrop.in').removeClass('in');

  return promise;
};

App.animateModalOpen = function() {
  var promise = new Ember.RSVP.Promise(function(resolve) {
    Ember.run.later(function() {
      resolve({ msg: "Hold Your Horses" });
    }, App.DEFAULT_CSS_TRANSITION_DURATION_MS);
  });

  $('.modal').addClass('in');
  $('.modal-backdrop').addClass('in');

  return promise;
};
