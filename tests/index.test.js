"use strict";
const supertest = require("supertest");
const app = require("../src/app");

it("should return status code 200", async () => {
  const { status } = await supertest(app).get("/");
  expect(status).toEqual(200);
});
