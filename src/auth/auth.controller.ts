import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { LoginDto } from "./dto/login.dto";
import { ApiTags } from "@nestjs/swagger";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";

@ApiTags("Authorization")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.UsersignUp(createUserDto);
  }

  @Post("register")
  signUp1(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.AdminsignUp(createAdminDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async Usersigon(@Body() loginDto: LoginDto) {
    return this.authService.Userlogin(loginDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async Adminsigon(@Body() loginDto: LoginDto) {
    return this.authService.AdminLogin(loginDto);
  }
}
