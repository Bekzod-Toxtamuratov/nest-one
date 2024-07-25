import { userStub } from "../test/stubs/user.stub";


export const UserService = jest.fn().mockReturnValue({
  createUser: jest.fn().mockReturnValue(userStub()),
  findAll:jest.fn().mockReturnValue([userStub()]),
  findOne:jest.fn().mockReturnValue(userStub()),
  update:jest.fn().mockReturnValue(userStub()),
  delete:jest.fn().mockReturnValue({message:"Foydalanuvchi ochirildi"}),
  
});