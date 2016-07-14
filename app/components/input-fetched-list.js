import Ember from 'ember';


export default Ember.Component.extend({
  classNames: ['my-select'],
  init () {
    this.setPossibleItems();
    this._super(...arguments);
  },

  setPossibleItems() {
    let _this = this;
    let url = '/api/client-constants/' +  this.get('constantType')
    Ember.$.ajax({
      url: url,
    }).done((data) => {
      _this.set('fetchedData', data);
    });
  },

  possibleData: Ember.computed('fetchedData.@each', function () {
    return this.get('fetchedData');
  }),

  possibleItemAttrs: Ember.computed('possibleData.@each', function () {
    let data = this.get('possibleData');

    if (data && data.length > 0) {
      return data.map((datum) => datum.name);
    }
  }),

  actions: {
    selectItem(datumAttr) {
      console.log('SELECTED')
      let datum = this.get('possibleData').findBy('name', datumAttr);
      this.get('selectItem')(datum);
    }
  }
});
