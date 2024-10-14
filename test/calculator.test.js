const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/server'); // Assuming the server is in '../src/server'
const { expect } = chai;
require('dotenv').config();
chai.use(chaiHttp);

describe('Calculator', () => {
	const a = parseFloat(process.env.TEST_A || 5);
    const b = parseFloat(process.env.TEST_B || 3);
	
    // Test for addition
	it('add two numbers', (done) => {
		chai.request(server)
            .post('/calculator/add')
            .send({ a, b })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.result).to.equal(a + b);
                done();
            });
	});
    // Test for subtraction
	it('subtract two numbers', (done) => {
		chai.request(server)
            .post('/calculator/subtract')
            .send({ a, b })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.result).to.equal(a - b);
                done();
            });
	});
    // Test for multiplication
	it('multiply two numbers', (done) => {
		chai.request(server)
            .post('/calculator/multiply') // Corrected endpoint
            .send({ a, b })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.result).to.equal(a * b);
                done();
            });
	});
    // Test for division
	it('divide two numbers', (done) => {
		chai.request(server)
            .post('/calculator/divide') // Corrected endpoint
            .send({ a, b })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.result).to.equal(a / b);
                done();
            });
	});
    // Test for the result of the last calculation (addition)
	it('output of the calculation', (done) => {
		chai.request(server)
		    .get('/calculation/result')
		    .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('object');
                expect(res.body.lastResult).to.equal(a + b); // Expect the last result to be from addition
                done();
            });
	});
    // Test for division by zero
	it("number can't be divided by 0", (done) => {
        chai.request(server)
            .post('/calculator/divide') // Using the divide endpoint
            .send({ a: 6, b: 0 })
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.be.an('object');
                expect(res.body.error).to.equal('Number cannot be divided by zero!');
                done();
            });
    });
});