/* import { PartialType } from '@nestjs/mapped-types';
import { CreateBuilderDto } from './create-builder.dto';

export class UpdateBuilderDto extends PartialType(CreateBuilderDto) {
  full_name?: string;
  birth_day?: string;
  salary?: number;
  companyId?: number;
} */
export class UpdateBuilderDto {
  full_name?: string;
  birth_day?: string;
  salary?: number;
  companyId?: number;
}
