import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { CustomValidationPipe } from "./pipe/validation.pipe";

const start = async () => {
  try {
    const PORT = process.env.PORT;
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe()); // ozini standart pipe bu

    // app.useGlobalPipes(new CustomValidationPipe());

    const config = new DocumentBuilder()
      .setTitle("NestOne project")
      .setDescription("Nest One API")
      .setVersion("1.0")
      .addTag("validation, swagger,Nestjs,Sequelize")
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api/docs", app, document);

    await app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("error ", error);
  }
};
start();
