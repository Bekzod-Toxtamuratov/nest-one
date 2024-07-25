import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from "supertest";
import { error } from "console";
// import { request } from "express";
// import { response } from "express";

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/auth/signin")
      .send({
        email: "bekzodto12xtaamura1125da51dtov05@gmail.com",
        password: "12345!BZa",
      });
    token = response.body.token;
    console.log(token);
  });
  it("/user (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/user")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-type", /json/)
      .expect(200);
  });
  it("/user (GET) 401 --> 'Unauthorized' error", () => {
    return (
      request(app.getHttpServer())
        .get("/user")
        // .set("Authorization", `Bearer ${token}`)
        .expect("Content-type", /json/)
        .expect(401)
    );
  });

  it("/auth/signup (POST) --> 201", async () => {
    return request(app.getHttpServer())
      .post("/auth/signup")
      .send({
        name: "Toshmat",
        email: "bekzod2112to112xta1amura1125da51dtov05@gmail.com",
        password: "123415!BZa",
      })
      .expect("Content-type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject({
          token: expect.any(String),
        });
      });
  });

  // it("/auth/signup (POST) --> 201", async () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/signup")
  //     .send({
  //       name: "Toshmat1",
  //       email: "bekzodto12xt1a1amura11125da51dtov05@gmail.com",
  //       password: "12345!B51Za",
  //     })
  //     .expect("Content-type", /json/)
  //     .expect(400)
  //     .expect({
  //       message: "bunday foydalanuvchi mavjud",
  //       error: "Bad request",
  //       statusCode: 400,
  //     });
  // });

  // it("/auth/signup (POST) -->400 Validation error", () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/signup")
  //     .send({
  //       name: "Toshmat",
  //       email: "bekzodto12xta1amura1125da51dtov05@gmail.com",
  //       password: "123",
  //     })
  //     .expect("Content-type", /json/)
  //     .expect(400)
  //     .expect({
  //       statusCode: 400,
  //       message: ["password is not stong enough"],
  //       error: "Bad request",
  //     });
  // });
  afterAll(async () => {
    await app.close();
  });
});
