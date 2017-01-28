import ApplicationSerializer from './application';
let { EmbeddedRecordsMixin } = DS;

export default ApplicationSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    paymentMethods: {
      serialize: 'records',
      deserialize: 'records'
    }
  }
});
