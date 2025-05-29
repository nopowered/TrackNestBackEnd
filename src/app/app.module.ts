import { Module } from '@nestjs/common';
import { TrackControlModule } from '../track-control/track-control.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { readFileSync } from 'fs';

const config = JSON.parse(readFileSync("conf.json").toString());

@Module({
  imports: [TrackControlModule,
  TypeOrmModule.forRoot(config.db)],
})

export class AppModule {}
