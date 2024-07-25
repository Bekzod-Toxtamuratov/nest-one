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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_models_1 = require("./models/admin.models");
let AdminService = class AdminService {
    constructor(AdminRepo) {
        this.AdminRepo = AdminRepo;
    }
    create(createAdminDto) {
        return this.AdminRepo.create(createAdminDto);
    }
    findAll() {
        return this.AdminRepo.findAll();
    }
    async getADminByEmail(email) {
        return this.AdminRepo.findOne({ where: { email }, include: { all: true } });
    }
    async findOne(id) {
        const evetntData = await this.AdminRepo.findByPk(id);
        if (!evetntData) {
            throw new common_1.NotFoundException(`admin type with ID ${id} not found`);
        }
        return evetntData;
    }
    async update(id, updateAdminDto) {
        const [numberOfAffectedRows, [updatedADmin]] = await this.AdminRepo.update(updateAdminDto, {
            where: { id },
            returning: true,
        });
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException(`admin with ID ${id} not found`);
        }
        return updatedADmin;
    }
    async remove(id) {
        try {
            const affectedRows = await this.AdminRepo.destroy({
                where: { id },
            });
            if (affectedRows > 0) {
                return `admin with ID ${id} was removed successfully.`;
            }
            else {
                return `admin with ID ${id} not found.`;
            }
        }
        catch (error) {
            throw new Error(`Error removing admin with ID ${id}: ${error.message}`);
        }
    }
    async activateUser(activateAdminDto) {
        const admin = await this.AdminRepo.findByPk(activateAdminDto.adminId);
        if (admin) {
            admin.is_active = false;
            await admin.save();
            return admin;
        }
        throw new common_1.NotFoundException("admin topilmadi");
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_models_1.Admin)),
    __metadata("design:paramtypes", [Object])
], AdminService);
//# sourceMappingURL=admin.service.js.map