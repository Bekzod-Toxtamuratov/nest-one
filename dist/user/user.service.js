"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_models_1 = require("./models/user.models");
const sequelize_1 = require("@nestjs/sequelize");
const roles_service_1 = require("../roles/roles.service");
let UserService = class UserService {
    constructor(UserRepo, rolesService) {
        this.UserRepo = UserRepo;
        this.rolesService = rolesService;
    }
    async createUser(createUserDto) {
        const newUser = await this.UserRepo.create(createUserDto);
        const role = await this.rolesService.getAllRoleByValue("USER");
        if (!role) {
            throw new common_1.BadRequestException("Role not found");
        }
        await newUser.$set("roles", [role.id]);
        await newUser.save();
        newUser.roles = [role];
        return newUser;
    }
    findAll() {
        return this.UserRepo.findAll({ include: { all: true } });
    }
    async getUserByEmail(email) {
        return this.UserRepo.findOne({ where: { email }, include: { all: true } });
    }
    findOne(id) {
        return this.UserRepo.findOne();
    }
    async update(id, updateUserDto) {
        const users = await this.UserRepo.update(updateUserDto, {
            where: { id },
            returning: true,
        });
        console.log("users ::  ", users[1][0]);
        return users[1][0];
    }
    async remove(id) {
        return ` Foydalanuchi ochirildi  user`;
    }
    async addRole(addRoleDto) {
        const user = await this.UserRepo.findByPk(addRoleDto.userId);
        const role = await this.rolesService.getAllRoleByValue(addRoleDto.value);
        if (role && user) {
            await user.$add("roles", role.id);
            const updateUser = await this.UserRepo.findByPk(addRoleDto.userId, {
                include: { all: true },
            });
            return updateUser;
        }
        throw new common_1.NotFoundException("Foydalanuvchi va role topilmadi ");
    }
    async removeRole(addRoleDto) {
        const user = await this.UserRepo.findByPk(addRoleDto.userId);
        const role = await this.rolesService.getAllRoleByValue(addRoleDto.value);
        if (role && user) {
            await user.$remove("roles", role.id);
            const updateUser = await this.UserRepo.findByPk(addRoleDto.userId, {
                include: { all: true },
            });
            return updateUser;
        }
        throw new common_1.NotFoundException("Foydalanuvchi va role topilmadi ");
    }
    async activateUser(activateUserDto) {
        const user = await this.UserRepo.findByPk(activateUserDto.userId);
        if (user) {
            user.is_active = true;
            await user.save();
            return user;
        }
        throw new common_1.NotFoundException("Foydalanuchi topilmadi");
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_models_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService])
], UserService);
//# sourceMappingURL=user.service.js.map