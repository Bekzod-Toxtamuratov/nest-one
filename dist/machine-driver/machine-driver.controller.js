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
exports.MachineDriverController = void 0;
const common_1 = require("@nestjs/common");
const machine_driver_service_1 = require("./machine-driver.service");
const create_machine_driver_dto_1 = require("./dto/create-machine-driver.dto");
const update_machine_driver_dto_1 = require("./dto/update-machine-driver.dto");
let MachineDriverController = class MachineDriverController {
    constructor(machineDriverService) {
        this.machineDriverService = machineDriverService;
    }
    create(createMachineDriverDto) {
        return this.machineDriverService.create(createMachineDriverDto);
    }
    findAll() {
        return this.machineDriverService.findAll();
    }
    findOne(id) {
        return this.machineDriverService.findOne(+id);
    }
    update(id, updateMachineDriverDto) {
        return this.machineDriverService.update(+id, updateMachineDriverDto);
    }
    remove(id) {
        return this.machineDriverService.remove(+id);
    }
};
exports.MachineDriverController = MachineDriverController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_machine_driver_dto_1.CreateMachineDriverDto]),
    __metadata("design:returntype", void 0)
], MachineDriverController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MachineDriverController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MachineDriverController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_machine_driver_dto_1.UpdateMachineDriverDto]),
    __metadata("design:returntype", void 0)
], MachineDriverController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MachineDriverController.prototype, "remove", null);
exports.MachineDriverController = MachineDriverController = __decorate([
    (0, common_1.Controller)('machine-driver'),
    __metadata("design:paramtypes", [machine_driver_service_1.MachineDriverService])
], MachineDriverController);
//# sourceMappingURL=machine-driver.controller.js.map