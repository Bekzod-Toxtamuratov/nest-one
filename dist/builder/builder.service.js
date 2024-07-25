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
exports.BuilderService = void 0;
const common_1 = require("@nestjs/common");
const builder_models_1 = require("./models/builder.models");
const sequelize_1 = require("@nestjs/sequelize");
let BuilderService = class BuilderService {
    constructor(buildRepo) {
        this.buildRepo = buildRepo;
    }
    async createBuilder(createBuilderDto) {
        return this.buildRepo.create(createBuilderDto);
    }
    async getAllBuilder() {
        return this.buildRepo.findAll({ include: { all: true } });
    }
    async getBuilderById(id) {
        return await this.buildRepo.findOne({ where: { id } });
    }
    async updateCompanyById(id, updateBuilderDto) {
        const builder = await this.buildRepo.update(updateBuilderDto, {
            where: { id },
            returning: true,
        });
        console.log(builder[1]);
        return builder[1][0];
    }
    async deleteBuilderById(id) {
        return this.buildRepo.destroy({ where: { id } });
    }
};
exports.BuilderService = BuilderService;
exports.BuilderService = BuilderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(builder_models_1.Builder)),
    __metadata("design:paramtypes", [Object])
], BuilderService);
//# sourceMappingURL=builder.service.js.map