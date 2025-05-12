import { Module } from '@nestjs/common';
import { TrackControlService } from './track-control.service';
import { TrackControlController } from './track-control.controller';
import { TrackPlatformModule } from '../track-platform/track-platform.module';
import { TrackPlatformService } from '../track-platform/track-platform.service';

@Module({
  providers: [TrackControlService, TrackPlatformService],
  controllers: [TrackControlController],
  imports: [TrackPlatformModule],
})
export class TrackControlModule {}
