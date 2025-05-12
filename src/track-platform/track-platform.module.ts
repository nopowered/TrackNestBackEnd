import { Module } from '@nestjs/common';
import { TrackPlatformService } from './track-platform.service';

@Module({
  providers: [TrackPlatformService],
  exports: [TrackPlatformService]
})
export class TrackPlatformModule {}
