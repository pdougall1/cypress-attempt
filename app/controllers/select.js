import Ember from 'ember';

export default Ember.Controller.extend({
  showStates: false,
  isDisabled: false,
  selectedItem: '',
  possibleItems: ['one', 'two', 'three'],

  states: Ember.computed('showStates', function () {
    let _this = this;
    if (this.get('showStates')) {
      Ember.$.get('/api/client-constants/states', function(data) {
        _this.set('states', data.map((d) => d.name));
      });
    } else {
      _this.set('states', []);
    }
  }),

  actions: {
    selectItem: function (item) {
      console.log('selecting: ' + item);
      this.set('selectedItem', item);
      this.set('showStates', true)
    }
  }

});
