//set timeout to 30 seconds
jest.setTimeout(5000);
require("dotenv").config();

const mongoose = require("mongoose");
const request = require("supertest");
const app = require("./app");

beforeEach(async () => {
    await mongoose.connect(process.env.clusterURL, {useNewUrlParser: true});
});

afterEach(async () => {
    await mongoose.connection.close();
});

//Write tests for the routes

describe("GET /:username", () => {
    it("should get all tasks", async () => {
        const res = await request(app).get("/test");
        expect(res.status).toBe(200);
    });
});

describe("POST /create/:username", () => {
    it("should create a new task", async () => {
        const res = await request(app).post("/create/test").send({
            task: "test task",
            description: "test description",
        });
        expect(res.status).toBe(200);
    });
});

describe("POST /delete", () => {
    it("should delete a task", async () => {
        const res = await request(app).post("/delete").send({
            username: "test",
            id: "random id"
        });
        expect(res.status).toBe(404);
    });
});

describe("POST /signup", () => {
    it("should create a new account", async () => {
        const res = await request(app).post("/signup").send({
            username: "test",
            password: "1234"
        });
        expect(res.status).toBe(409);
    });
});

describe("GET /signin/:user/:password", () => {
    it("should check if account exists", async () => {
        const res = await request(app).get("/signin/test/1234");
        expect(res.status).toBe(200);
    });
}
);
