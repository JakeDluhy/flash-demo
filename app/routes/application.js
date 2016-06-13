import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    flashMessage() {
      Ember.get(this, 'flashMessages').success('Hello World');
    }
  }
});
