/* eslint-disable no-undef */

import request from 'supertest';
import app from '../server';

describe('Post Endpoints tests', () => {
  it('should login with admin user', async () => {
    const res = await request(app).post('/login').send({
      email: 'admin@teste.com',
      password: '123ABC',
    });
    const { body, statusCode } = res;
    expect(statusCode).toEqual(200);
    expect(body).toHaveProperty('token');
  });

  it('should create a new user', async () => {
    const res = await request(app).post('/new-user').send({
      name: 'Jane Doe',
      email: 'janedontknow@gmail.com',
      password: 'abc123',
    });
    const { statusCode } = res;
    expect(statusCode).toEqual(200);
  });
});
