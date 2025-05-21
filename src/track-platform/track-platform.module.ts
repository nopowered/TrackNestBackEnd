import { Module } from '@nestjs/common';
import { TrackPlatformService } from './track-platform.service';
import { TrackSideService} from '../track-side/track-side.service';

@Module({
  providers: [TrackPlatformService],
  exports: [TrackPlatformService],
  imports: [TrackSideService]
})
export class TrackPlatformModule {}
//
