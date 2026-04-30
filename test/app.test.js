const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  test('should return homepage content', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Hi, I'm Prachi");
    expect(res.text).toContain("DevOps/Cloud Journey");
    expect(res.text).toContain("CI/CD, Docker, Kubernetes");
  });
});