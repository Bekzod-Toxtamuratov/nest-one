import { forwardRef, Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { AdminModule } from "../admin/admin.module";

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => AdminModule),
    JwtModule.register({
      // global:true, // boshqa modulardan ham ishlatish munkin degani;
      secret: "MySecretKey",
      signOptions: { expiresIn: "1h" },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
