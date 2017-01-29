import DS from 'ember-data';
import PaymentMethod from './payment-method';
let { attr } = DS;

export default PaymentMethod.extend({
  fingerprintHash: attr(),
});
