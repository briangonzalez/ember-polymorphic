import DS from 'ember-data';
import Ember from 'ember';
let { belongsTo, Model } = DS;
let { computed } = Ember;

export default Model.extend({
  user: belongsTo('user', { inverse: 'paymentMethods', async: false }),
  modelName: computed(function () {
    return this.constructor.modelName;
  }),
});
