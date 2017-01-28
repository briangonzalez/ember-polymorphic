export default function() {

  this.get('/users/me', function (db, req) {
    return {
      user: {
        id: 'me',
        name: 'Jacob Smelley',
        paymentMethods: [
          {
            id: 1,
            user_id: 1,
            type: 'PaymentMethodPaypal'
          },
          {
            id: 2,
            user_id: 1,
            type: 'PaymentMethodCc',
            last4: '1243'
          },
          {
            id: 3,
            user_id: 1,
            type: 'PaymentMethodApplePay',
          }
        ]
      },
    }
  });

}
