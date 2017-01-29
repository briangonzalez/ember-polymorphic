export default function() {

  this.get('/users/me', function (db, req) {
    return {
      data: {
        id: 'me',
        type: 'user',
        attributes: {
          name: 'Jacob Kelley',
        },
        relationships: {
          'payment-methods': {
            data: [
              { id: 1, type: 'PaymentMethodPaypal' },
              { id: 2, type: 'PaymentMethodCc' },
              { id: 3, type: 'PaymentMethodApplePay', }
            ]
          }
        }
      },
      included: [
        { id: 1, type: 'PaymentMethodPaypal', attributes: {  'linked-email': 'me@briangonzalez.org' } },
        { id: 2, type: 'PaymentMethodCc', attributes: {  last4: '1243' }},
        { id: 3, type: 'PaymentMethodApplePay', attributes: { 'fingerprint-hash': 'AESKJASK76786JHGJH' } }
      ]
    }
  });
}
