import {
	HttpException,
	HttpStatus,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import * as byscypt from 'bcrypt'
import { AdminService } from '../admin/admin.service'
import { CreateAdminDto } from '../admin/dto/create-admin.dto'
import { Admin } from '../admin/models/admin.models'
import { CreateUserDto } from '../user/dto/create-user.dto'
import { User } from '../user/models/user.models'
import { UserService } from '../user/user.service'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
		private readonly adminService: AdminService
	) {}
	async UsersignUp(createUserDto: CreateUserDto) {
		const condiate = await this.userService.getUserByEmail(createUserDto.email)
		// console.log("condiate", condiate);
		if (condiate) {
			// throw new BadRequestHttpException("Bunday foydalanuvchi mavjud");
			throw new HttpException(
				'Bunday foydalanuvchi mavjud',
				HttpStatus.BAD_REQUEST
			)
		}
		const hashedPassword = await byscypt.hash(createUserDto.password, 7)
		createUserDto.password = hashedPassword
		const newUser = await this.userService.createUser(createUserDto)
		return this.UsergenerateToken(newUser)
	}
	async AdminsignUp(createAdminDto: CreateAdminDto) {
		const admin = await this.adminService.getADminByEmail(createAdminDto.email)

		if (admin) {
			throw new HttpException('Bunday admin mavjud', HttpStatus.BAD_REQUEST)
		}
		const hashedPassword = await byscypt.hash(createAdminDto.password, 7)

		createAdminDto.password = hashedPassword

		const newAdmin = await this.adminService.create(createAdminDto)

		// console.log("newAdmin",newAdmin)
		const data = await this.AdmingenerateToken(newAdmin)

		newAdmin.hashed_refresh_token = data.token
		newAdmin.save()

		return data
	}

	private async UsergenerateToken(user: User) {
		const payload = { sub: user.id, email: user.email, roles: user.roles }
		return { token: this.jwtService.sign(payload) }
	}
	private async AdmingenerateToken(admin: Admin) {
		const payload = {
			sub: admin.id,
			email: admin.email,
			is_active: admin.is_active,
			is_creator: admin.is_creator,
		}
		return { token: this.jwtService.sign(payload) }
	}
	async Userlogin(loginDto: LoginDto) {
		const user = await this.userService.getUserByEmail(loginDto.email)
		if (!user) {
			throw new UnauthorizedException('email yoki password notogri ')
		}
		const validPassword = await byscypt.compare(
			loginDto.password,
			user.password
		)
		if (!validPassword) {
			throw new UnauthorizedException('email yoki password notogri ')
		}
		return this.UsergenerateToken(user)
	}
	async AdminLogin(loginDto: LoginDto) {
		const admin = await this.adminService.getADminByEmail(loginDto.email)
		// console.log("admin", admin);

		if (!admin) {
			// console.log("!admin if ishladi ");
			throw new UnauthorizedException('email yoki password notogri ')
		}
		const validPassword = await byscypt.compare(
			loginDto.password,
			admin.password
		)
		if (!validPassword) {
			// console.log(loginDto.password, "   ", admin.password);
			;('!validPassword if ishladi ')

			throw new UnauthorizedException('email yoki password notogri ')
		}
		return this.AdmingenerateToken(admin)
	}
}
