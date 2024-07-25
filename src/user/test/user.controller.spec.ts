import { JwtService } from "@nestjs/jwt";
import { UserController } from "../user.controller";
import { UserService } from "../user.service";
import { Test } from "@nestjs/testing";
import { User } from "../models/user.models";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStub } from "./stubs/user.stub";
import { UpdateUserDto } from "../dto/update-user.dto";

jest.mock("../user.service");

describe("User Contoller", () => {
  let userController: UserController;
  let userService: UserService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, JwtService],
    }).compile();
    userController = modulRef.get<UserController>(UserController);
    userService = modulRef.get<UserService>(UserService);
    jest.clearAllMocks();
  });
  it("User Controller should be defined", () => {
    expect(userController).toBeDefined();
  });

  it("User service should be defined", () => {
    expect(userService).toBeDefined();
  });

  describe("createUser", () => {
    describe("when createUser is called ", () => {
      let user: User;
      let createUserDto: CreateUserDto;

      beforeAll(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
        };

        user = await userController.create(createUserDto);
        console.log("user:  ", user);
      });
      it("then it should call userService", () => {
        expect(userService.createUser).toHaveBeenCalledWith(createUserDto);
      });

      it("then it should  return ", () => {
        expect(user).toEqual(userStub());
      });
    });
  });
  // *********************************************  getALLL
  describe("getALlUser", () => {
    describe("when getALlUser is called", () => {
      let users: User[];
      beforeAll(async () => {
        users = await userController.findAll();
      });
      test("when it should call userServise", () => {
        expect(userService.findAll).toHaveBeenCalled();
      });
      test("then it should return users", () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe("getByID", () => {
    describe(" when getById User is called", () => {
      let user: User;
      beforeAll(async () => {
        user = await userController.findOne(String(userStub().id));
      });
      test("when it should call userServise", () => {
        expect(userService.findOne).toHaveBeenCalledWith(userStub().id);
      });
      test("then it should return user", () => {
        expect(user).toEqual(userStub());
      });
    });
  });
  // ***********************************

  // describe("Update ByID", () => {
  //   describe(" when update ById User is called", () => {
  //     let updateUserDto: UpdateUserDto;
  //     let user: User;
  //     beforeAll(async () => {
  //       user = await userController.update(
  //         String(userStub().id),
  //         updateUserDto
  //       );
  //     });
  //     test("when it should call userServise", () => {
  //       expect(userService.update).toHaveBeenCalledWith(userStub().id,updateUserDto);
  //     });

  //     test("then it should return user", () => {
  //       expect(user).toEqual(userStub());
  //     });
  //   });
  // });
  //  ******************************************

  describe("Update ByID", () => {
    describe("when update ById User is called", () => {
      let updateUserDto: UpdateUserDto;
      let updatedUser: User;
      beforeAll(async () => {
        updateUserDto = {
          name: "Updated Name",
          email: "updated@example.com",
          password: "newpassword",
        };
        updatedUser = await userController.update(
          String(userStub().id),
          updateUserDto
        );
        console.log("updateUserDto:  ", updateUserDto);
        console.log("updatedUser:  ", updatedUser);
      });
      test("then it should call userService.update", () => {
        expect(userService.update).toHaveBeenCalledWith(
          userStub().id,
          updateUserDto
        );
      });
      test("then it should return updated user", () => {
        expect(updatedUser).toEqual(userStub());
      });
    });
  });

  // *************************************************************8

  // describe("delete ByID", () => {
  //   describe(" when delete ById User is called", () => {
  //     //  let user: User;
  //     let user="";
  //     beforeAll(async () => {
  //       user = await userController.remove(2);
  //     });
  //     // test("when it should call userServise", () => {
  //     //   expect(userService.update).toHaveBeenCalledWith(1);
  //     // });

  //     test(`${user} `,() => {
  //       expect(user).toEqual(userStub());
  //     });
  //   });
  // });

  // describe("delete ByID", () => {
  //   describe("when delete ById User is called", () => {
  //     let deletedUser = "";

  //     beforeEach(async () => {
  //       // Mock userService.remove to return the deleted user
  //       // userService.remove.mockResolvedValue(userStub());

  //       // Assuming userStub().id is the ID of the user to be deleted
  //       deletedUser = await userController.remove(userStub().id);
  //     });

  //         it("should call userService.remove with correct parameters", () => {
  //           expect(userService.remove).toHaveBeenCalledWith(3132);
  //         });

  //         // it("should return the deleted user", () => {
  //         //   expect(deletedUser).toEqual(userStub());
  //         // });
  //   });
  // });
});
