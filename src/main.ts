import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { readFileSync } from "fs";

const port: number = JSON.parse(readFileSync("conf.json").toString()).port;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(port);
  console.log(`Server started on localhost:${port}`);
}
bootstrap();
