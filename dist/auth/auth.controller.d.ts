import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { LoginDto } from "./dto/login.dto";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<{
        token: string;
    }>;
    signUp1(createAdminDto: CreateAdminDto): Promise<{
        token: string;
    }>;
    Usersigon(loginDto: LoginDto): Promise<{
        token: string;
    }>;
    Adminsigon(loginDto: LoginDto): Promise<{
        token: string;
    }>;
}
