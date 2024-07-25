import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
export declare class RolesGuard implements CanActivate {
    private readonly jwtSevice;
    private readonly reflector;
    constructor(jwtSevice: JwtService, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
