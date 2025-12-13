import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { RolesService } from '../roles/roles.service'
import { ActivateUserDto } from './dto/activity-user.dto'
import { addRoleDto } from './dto/add-tole.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './models/user.models'
@Injectable()
export class UserService {
	constructor(
		@InjectModel(User) private readonly UserRepo: typeof User,
		private readonly rolesService: RolesService
	) {}
	async createUser(createUserDto: CreateUserDto) {
		const newUser = await this.UserRepo.create(createUserDto)
		const role = await this.rolesService.getAllRoleByValue('USER')
		if (!role) {
			throw new BadRequestException('Role not found')
		}

		// userRolesRepo.Create(newUser.id,role.id)
		await newUser.$set('roles', [role.id])
		// ikkalasi bir xil hisoblanadi;

		await newUser.save()
		newUser.roles = [role]

		return newUser
	}

	findAll() {
		return this.UserRepo.findAll({ include: { all: true } })
	}

	async getUserByEmail(email: string): Promise<User> {
		return this.UserRepo.findOne({ where: { email }, include: { all: true } })
	}

	findOne(id: number) {
		return this.UserRepo.findOne()
	}
	async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
		const users = await this.UserRepo.update(updateUserDto, {
			where: { id },
			returning: true,
		})
		console.log('users ::  ', users[1][0])
		return users[1][0]
	}

	async remove(id: number) {
		return ` Foydalanuchi ochirildi  user`
	}

	//  ***************************************************************************************
	async addRole(addRoleDto: addRoleDto) {
		const user = await this.UserRepo.findByPk(addRoleDto.userId)
		const role = await this.rolesService.getAllRoleByValue(addRoleDto.value)

		if (role && user) {
			await user.$add('roles', role.id)
			const updateUser = await this.UserRepo.findByPk(addRoleDto.userId, {
				include: { all: true },
			})
			return updateUser
		}
		throw new NotFoundException('Foydalanuvchi va role topilmadi ')
	}

	async removeRole(addRoleDto: addRoleDto) {
		const user = await this.UserRepo.findByPk(addRoleDto.userId)
		const role = await this.rolesService.getAllRoleByValue(addRoleDto.value)
		if (role && user) {
			await user.$remove('roles', role.id)
			const updateUser = await this.UserRepo.findByPk(addRoleDto.userId, {
				include: { all: true },
			})
			return updateUser
		}
		throw new NotFoundException('Foydalanuvchi va role topilmadi ')
	}

	async activateUser(activateUserDto: ActivateUserDto) {
		const user = await this.UserRepo.findByPk(activateUserDto.userId)
		if (user) {
			user.is_active = true
			await user.save()
			return user
		}
		throw new NotFoundException('Foydalanuchi topilmadi')
	}
}
