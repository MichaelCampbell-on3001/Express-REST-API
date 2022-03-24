'use strict';

const supertest = require('supertest');
const server = require('../server/app.js');
const { sequelize } = require('../collection');
const request = supertest(server.app);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing our REST API', () => {

  test('Should create a person', async () => {
    let response = await request.post('/dryingredient').send({
      name: 'test',
      age: 100,
      job: 'tester',
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('test');
    expect(response.body.age).toEqual(100);
    expect(response.body.job).toEqual('tester');
  });

  test('Should read from dryingredient', () => {
    expect(true).toBe(false);
  });

  test('Should update a dryingredient', () => {
    expect(true).toBe(false);
  });

  test('Should delete a dryingredient', () => {
    expect(true).toBe(false);
  });

});