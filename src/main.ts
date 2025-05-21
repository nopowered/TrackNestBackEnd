import { NestFactory } from '@nestjs/core';
import { TrackControlModule } from './track-control/track-control.module';
import fs from "fs";

const config = JSON.parse("./config.json");

console.log(config);

const port: number = 3001;

async function bootstrap() {
  const app = await NestFactory.create(TrackControlModule, { cors: true });

  await app.listen(port);
  console.log(`Server started on localhost:${port}`);
}
bootstrap();
