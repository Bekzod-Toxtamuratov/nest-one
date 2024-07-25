import { IsNotEmpty, IsString } from "class-validator";
export class CreateRoleDto {
  @IsString({ message: "Qiymati string bolish kerak boladi" })
  @IsNotEmpty()
  value: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
