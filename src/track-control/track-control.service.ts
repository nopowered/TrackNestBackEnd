import { Injectable } from '@nestjs/common';
import {TrackPlatformService} from '../track-platform/track-platform.service';

@Injectable()
export class TrackControlService {
  constructor(private trackPlatformService: TrackPlatformService) {}

  getState(): string {
    return JSON.stringify({
      leftCommand: this.trackPlatformService.getLeftCommand(),
      rightCommand: this.trackPlatformService.getRightCommand(),
      speed: this.trackPlatformService.getSpeed()
    });
  }

  setCommand(command: "stop" | "forward" | "backward" | "left" | "right", speed: number): void {
    this.trackPlatformService.setLeftCommand(command === "left" || command === "forward" ? "forward" : "stop");
    this.trackPlatformService.setRightCommand(command === "right" || command === "forward" ? "forward" : "stop");
    this.trackPlatformService.setSpeed(speed);
  }
}
