import { Module } from '@nestjs/common';
import { TrackControlService } from './track-control.service';
import { TrackControlController } from './track-control.controller';

@Module({
  providers: [TrackControlService],
  controllers: [TrackControlController]
})
export class TrackControlModule {}
