import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user1", description: "foydalanuvchi ismi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "user1@mail.uz",
    description: "Foydalanuvchi email",
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "Uzbekiston", description: "foydalanuvchi paroli" })
  @IsStrongPassword({ minLength: 6, minSymbols: 0 })
  password: string;
}
