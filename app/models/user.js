import DS from 'ember-data';
let { attr, hasMany, Model } = DS;
export default Model.extend({
  name: attr(),
  paymentMethods: hasMany('payment-method', { polymorphic: true, async: false }),
});
