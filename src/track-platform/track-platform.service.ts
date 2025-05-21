import { Injectable } from '@nestjs/common';
import { TrackSideService} from '../track-side/track-side.service';

@Injectable()
export class TrackPlatformService {
  private _leftCommand: "stop" | "forward" | "back" = "stop";
  private _rightCommand: "stop" | "forward" | "back" = "stop";
  private _speed: number = 255;

  private leftSideTrack: TrackSideService = new TrackSideService(21, 22);
  private rightSideTrack: TrackSideService = new TrackSideService(21, 22);

  updteSide(): void {
    this.rightSideTrack.write(this._rightCommand);
    this.leftSideTrack.write(this._leftCommand);
  }

  getLeftCommand(): "stop" | "forward" | "back" {
    return this._leftCommand;
  }

  setLeftCommand(value: "stop" | "forward" | "back"): void {
    this._leftCommand = value;
  }

  getRightCommand(): "stop" | "forward" | "back" {
    return this._rightCommand;
  }

  setRightCommand(value: "stop" | "forward" | "back"): void {
    this._rightCommand = value;
  }

  getSpeed(): number {
    return this._speed;
  }

  setSpeed(value: number): void {
    this._speed = value;
  }
}
