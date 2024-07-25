import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { ValidationException } from "../exceptions/validation.exception";

@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    console.log("metadata",metadata);
    const obj = plainToInstance(metadata.metatype, value);
    const errors = await validate(obj);
    console.log(errors);

    if (errors.length) {
      let messages = errors.map((err) => {
        return `${err.property}- ${Object.values(err.constraints).join(" | ")}`;
      });
      // throw new BadRequestException(messages);
      throw new ValidationException(messages);
    }
    return value;
  }
}
