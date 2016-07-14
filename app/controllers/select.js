import Ember from 'ember';

export default Ember.Controller.extend({
  currentState: null,
  currentCriteria: null,
  actions: {
    selectState: function (state) {
      this.set('currentState', state.name);
    },

    selectCriteria: function (criteria) {
      this.set('currentCriteria', criteria.name);
    },
  }
});
