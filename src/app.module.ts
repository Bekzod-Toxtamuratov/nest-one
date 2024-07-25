import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { CompanyModule } from "./company/company.module";
import { BuilderModule } from "./builder/builder.module";
import { RolesModule } from "./roles/roles.module";
import { Role } from "./roles/models/role.model";
import { AuthModule } from "./auth/auth.module";
import { UserRoles } from "./roles/models/user_role.model";
import { User } from "./user/models/user.models";
import { Company } from "./company/models/company.models";
import { UserModule } from "./user/user.module";
import { Builder } from "./builder/models/builder.models";
import { Machine } from "./machine/models/machine.model";
import { Driver } from "./driver/models/driver.models";
import { MachineDriver } from "./machine-driver/models/machine-driver.entity";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.models";
import { FileModule } from "./file/file.module";
import { PostsModule } from "./posts/posts.module";
import { Posts } from "./posts/models/post.models";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "static"),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Company,
        Builder,
        Machine,
        Driver,
        MachineDriver,
        Role,
        User,
        UserRoles,
        Admin,
        Posts,
      ],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    CompanyModule,
    BuilderModule,
    RolesModule,
    UserModule,
    AuthModule,
    AdminModule,
    FileModule,
    PostsModule,
  ],
})
export class AppModule {}
