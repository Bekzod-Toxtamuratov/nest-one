import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
	UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { SelfGuard } from '../guards/self.guard'
import { ActivateUserDto } from './dto/activity-user.dto'
import { addRoleDto } from './dto/add-tole.dto'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './models/user.models'
import { UserService } from './user.service'

@ApiTags('Foydalanuvchilar')
// @ROLES_KEY("ADMIN")
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiOperation({ summary: 'Foydalanuchilarni yaratish ' })
	@Post()
	async create(@Body() createUserDto: CreateUserDto): Promise<User> {
		return this.userService.createUser(createUserDto)
	}

	@ApiOperation({ summary: 'Foydalanuchilarni  hammasini korish' })
	@ApiResponse({
		status: 200,
		description: 'List of Users',
		type: [User],
	})
	@UseGuards(JwtAuthGuard)
	@Get()
	findAll() {
		return this.userService.findAll()
	}

	@ApiOperation({ summary: 'Foydalanuchilarni id boyicha  korish' })
	@ApiResponse({
		status: 200,
		description: 'Get userById',
		type: User,
	})
	@UseGuards(SelfGuard)
	@UseGuards(JwtAuthGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(+id)
	}

	@ApiOperation({ summary: 'Foydalanuchilarni edit qilish' })
	@Patch(':id')
	async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(+id, updateUserDto)
	}

	@ApiOperation({ summary: 'Foydalanuchilarni edit qilish' })
	@Delete(':id')
	async remove(@Param('id') id: number) {
		return this.userService.remove(id)
	}

	// ************** addrole qoyildu bu narsa;
	@HttpCode(200)
	// @Roles('ADMIN', 'USER')
	// @UseGuards(RolesGuard)
	@Post('add_role')
	addRole(@Body() addRoleDto: addRoleDto) {
		console.log('addRole', addRoleDto);
		return this.userService.addRole(addRoleDto)
	}

	@HttpCode(200)
	// @Roles("ADMIN")
	@Post('remove_role')
	async removeRole(@Body() addRoleDto: addRoleDto) {
		return this.userService.removeRole(addRoleDto)
	}

	@HttpCode(200)
	@Post('activate')
	async activateUser(@Body() activateUserDto: ActivateUserDto) {
		return this.userService.activateUser(activateUserDto)
	}
}
