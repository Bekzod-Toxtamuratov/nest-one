"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_stub_1 = require("../test/stubs/user.stub");
exports.UserService = jest.fn().mockReturnValue({
    createUser: jest.fn().mockReturnValue((0, user_stub_1.userStub)()),
    findAll: jest.fn().mockReturnValue([(0, user_stub_1.userStub)()]),
    findOne: jest.fn().mockReturnValue((0, user_stub_1.userStub)()),
    update: jest.fn().mockReturnValue((0, user_stub_1.userStub)()),
    delete: jest.fn().mockReturnValue({ message: "Foydalanuvchi ochirildi" }),
});
//# sourceMappingURL=user.service.js.map