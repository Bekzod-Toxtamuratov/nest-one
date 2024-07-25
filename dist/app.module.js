"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const company_module_1 = require("./company/company.module");
const builder_module_1 = require("./builder/builder.module");
const roles_module_1 = require("./roles/roles.module");
const role_model_1 = require("./roles/models/role.model");
const auth_module_1 = require("./auth/auth.module");
const user_role_model_1 = require("./roles/models/user_role.model");
const user_models_1 = require("./user/models/user.models");
const company_models_1 = require("./company/models/company.models");
const user_module_1 = require("./user/user.module");
const builder_models_1 = require("./builder/models/builder.models");
const machine_model_1 = require("./machine/models/machine.model");
const driver_models_1 = require("./driver/models/driver.models");
const machine_driver_entity_1 = require("./machine-driver/models/machine-driver.entity");
const admin_module_1 = require("./admin/admin.module");
const admin_models_1 = require("./admin/models/admin.models");
const file_module_1 = require("./file/file.module");
const posts_module_1 = require("./posts/posts.module");
const post_models_1 = require("./posts/models/post.models");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, "static"),
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: "postgres",
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [
                    company_models_1.Company,
                    builder_models_1.Builder,
                    machine_model_1.Machine,
                    driver_models_1.Driver,
                    machine_driver_entity_1.MachineDriver,
                    role_model_1.Role,
                    user_models_1.User,
                    user_role_model_1.UserRoles,
                    admin_models_1.Admin,
                    post_models_1.Posts,
                ],
                autoLoadModels: true,
                sync: { alter: true },
                logging: false,
            }),
            company_module_1.CompanyModule,
            builder_module_1.BuilderModule,
            roles_module_1.RolesModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            admin_module_1.AdminModule,
            file_module_1.FileModule,
            posts_module_1.PostsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map