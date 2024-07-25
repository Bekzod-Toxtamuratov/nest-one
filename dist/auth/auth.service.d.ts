import { UserService } from "../user/user.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { LoginDto } from "./dto/login.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { AdminService } from "../admin/admin.service";
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly adminService;
    constructor(userService: UserService, jwtService: JwtService, adminService: AdminService);
    UsersignUp(createUserDto: CreateUserDto): Promise<{
        token: string;
    }>;
    AdminsignUp(createAdminDto: CreateAdminDto): Promise<{
        token: string;
    }>;
    private UsergenerateToken;
    private AdmingenerateToken;
    Userlogin(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    AdminLogin(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
