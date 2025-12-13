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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const jwt_1 = require("@nestjs/jwt");
const roles_auth_decorator_1 = require("../decorators/roles-auth.decorator");
let RolesGuard = class RolesGuard {
    constructor(jwtSevice, reflector) {
        this.jwtSevice = jwtSevice;
        this.reflector = reflector;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const requiredRoles = this.reflector.getAllAndOverride(roles_auth_decorator_1.ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles) {
            return true;
        }
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new common_1.UnauthorizedException({
                message: "Foydalanuvchi avtorizatsiyasidan otmagan  1 ",
            });
        }
        const bearer = authHeader.split(" ")[0];
        const token = authHeader.split(" ")[1];
        if (bearer != "Bearer" || !token) {
            throw new common_1.UnauthorizedException({
                message: "Foydalanuvchi avtorizatsiyasidan otmagan 2 ",
            });
        }
        let user;
        try {
            user = this.jwtSevice.verify(token);
        }
        catch (error) {
            throw new common_1.UnauthorizedException({
                message: "Foydalanuvchi avtorizatsiyasidan otmagan 3 ",
            });
        }
        req.user = user;
        console.log("requiredRoles", requiredRoles);
        const permission = user.roles.some((role) => requiredRoles.includes(role.value));
        if (!permission) {
            throw new common_1.ForbiddenException({ message: "sizga ruxsat etilmagan" });
        }
        return true;
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        core_1.Reflector])
], RolesGuard);
//# sourceMappingURL=roles.guard.js.map