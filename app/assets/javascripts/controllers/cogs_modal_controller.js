App.CogsModalController = App.ModalController.extend({
  create: function() {
    var cog = this.store.createRecord('cog');

    cog.on('didCreate', this, function() {
      this.close();
    });

    this.set('model', cog);
  }
});
