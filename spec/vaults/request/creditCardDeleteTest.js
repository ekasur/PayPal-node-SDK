'use strict';

const chai = require('chai');
const client = require('../../test_harness').client();
const CreditCardDeleteRequest = require('../../../lib/paypalrestsdk').CreditCardDeleteRequest;
const CreditCardCreate = require('./creditCardCreateTest').CreditCardCreate;

describe('CreditCardDeleteRequest', function () {
  it('works as expected', function () {
    return CreditCardCreate().then((r) => {
        let deleteRequest = new CreditCardDeleteRequest(r.result.id);

        return client.execute(deleteRequest).then((r) => {
          chai.assert.equal(r.statusCode, 204);
        });
    });
  });
});