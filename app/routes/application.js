import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    const user = this.store.createRecord('user', { id: 'me', name: 'Jacob Kelley' });

    user.get('paymentMethods').pushObjects([
      this.store.createRecord('payment-method-paypal', { id: '1', linkedEmail: 'me@briangonzalez.org' }),
      this.store.createRecord('payment-method-apple-pay', { id: '2', fingerprintHash: 'AE7676JHG' }),
      this.store.createRecord('payment-method-cc', { id: '3', last4: '1234' }),
    ]);

    return user;
  }

});
