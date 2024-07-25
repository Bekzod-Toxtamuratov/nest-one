import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({ example: "admin example", description: "admin description" })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: "login example", description: "login description" })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({
    example: "password example",
    description: "password description",
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    example: "is_activate example",
    description: "is_activate description",
  })
  // @IsNotEmpty()
  // @IsBoolean()
  is_active: boolean;

  @ApiProperty({
    example: "is_creator example",
    description: "is_creator description",
  })
  // @IsNotEmpty()
  // @IsBoolean()
  is_creator: boolean;

  @ApiProperty({
    example: "hashed_refresh_token example",
    description: "hashed_refresh_token description",
  })
  // @IsNotEmpty()
  // @IsString()
  // hashed_refresh_token: string;
  @ApiProperty({
    example: "email example",
    description: "email description",
  })
  @IsNotEmpty()
  // @IsEmail()
  email: string;
}
