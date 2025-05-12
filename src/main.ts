import { NestFactory } from '@nestjs/core';
import { TrackControlModule } from './track-control/track-control.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(TrackControlModule);
  await app.listen(port);
  console.log(`Server started on localhost:${port}`);
}
bootstrap();
