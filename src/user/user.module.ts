import { forwardRef, Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/user.models";
import { UserRoles } from "../roles/models/user_role.model";
import { Role } from "../roles/models/role.model";
import { RolesModule } from "../roles/roles.module";
import { AuthModule } from "../auth/auth.module";
import { Posts } from "../posts/models/post.models";

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserRoles, Role,Posts]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
