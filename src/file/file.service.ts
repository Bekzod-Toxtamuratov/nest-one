import { Injectable, InternalServerErrorException } from "@nestjs/common";

import * as uuid from "uuid";
import * as path from "path";
import * as fs from "node:fs";

@Injectable()
export class FileService {
  async saveFile(file: any): Promise<string> {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve(__dirname, "..", "static");
      // console.log(path.join(filePath, fileName));

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      // console.log(file.buffer);

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);

      return fileName;
    } catch (error) {
      throw new InternalServerErrorException("filega yozishda xatolik bor");
    }
  }
}
