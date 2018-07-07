'use strict';

const app = require('../../app.js');
const chai = require('chai');

const { expect } = chai;

const slack = {
    send: async () => ({ text: 'OK' })
};

describe('Tests handler', function () {
    it('verifies successful response', async () => {
        const result = await app.handler(slack, undefined, undefined);
        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.equal('OK');
    });
});
