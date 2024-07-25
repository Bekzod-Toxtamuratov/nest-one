import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "../user.service";
import { userStub } from "./stubs/user.stub";
import { JwtService } from "@nestjs/jwt";
import { RolesService } from "../../roles/roles.service";
import { getModelToken } from "@nestjs/sequelize";
import { User } from "../models/user.models";
import { Role } from "../../roles/models/role.model";
import { CreateUserDto } from "../dto/create-user.dto";

describe("Users servise", () => {
  let usersService: UserService;
  const mockUsersRepository = {
    create: jest.fn().mockImplementation(userStub),
    findOne: jest.fn().mockImplementation(userStub),
    findAll: jest.fn().mockImplementation(() => [userStub()]),
    findByPk: jest.fn().mockImplementation(userStub),
    destroy: jest.fn(),
  };
  const mockRolesRepository = {
    findOne: jest.fn().mockImplementation((value: string) => "USER"),
  };
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UserService,
        JwtService,
        RolesService,
        {
          provide: getModelToken(User),
          useValue: mockUsersRepository,
        },
        {
          provide: getModelToken(Role),
          useValue: mockRolesRepository,
        },
      ],
    }).compile();
    usersService = moduleRef.get<UserService>(UserService);
  });

  it("should be defined", () => {
    expect(usersService).toBeDefined;
  });

  // describe("createUser", () => {
  //   describe("when createUser is called ", () => {
  //     let user: User;
  //     let createUserDto: CreateUserDto;
  //     let newUser: User;
  //     beforeEach(async () => {
  //       createUserDto = {
  //         name: userStub().name,
  //         email: userStub().email,
  //         password: userStub().password,
  //       };
  //       newUser = await usersService.createUser(createUserDto);
  //       console.log("new user ", newUser);
  //     });
  //     it("should be defined", async () => {
  //       expect(newUser).toMatchObject({
  //         ...userStub(),
  //         roles: ["USER"],
  //       });
  //     });
  //   });
  // });


  describe("getOneUser", () => {
    describe("when getOneUser is called", () => {
      test("then it should call usersService", async () => {
        expect(await usersService.findOne(userStub().id)).toEqual(userStub());
      });
    });
  });


  describe("getAllUsers", () => {
    describe("when getAllUsers is called", () => {
      test("then it should call usersService", async () => {
        expect(await usersService.findAll()).toEqual([userStub()]);
      });
    });
  });


  
  describe("GetUserByEmail", () => {
    describe("when getUserByEmail is called", () => {
      test("then it should call usersService", async () => {
        expect(await usersService.getUserByEmail(userStub().email)).toEqual(
          userStub()
        );
      });
    });
  });


 

 
});
