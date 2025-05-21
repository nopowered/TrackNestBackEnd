import { Module } from '@nestjs/common';
import { TrackSideService } from './track-side.service';

@Module({
  providers: [TrackSideService]
})
export class TrackSideModule {}
