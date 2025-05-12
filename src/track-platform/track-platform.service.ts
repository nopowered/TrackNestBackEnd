import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackPlatformService {
  private _leftCommand: "stop" | "forward" | "backward";
  private _rightCommand: "stop" | "forward" | "backward";
  private _speed: number;

  constructor() {
    this._leftCommand = "stop";
    this._rightCommand = "stop";
    this._speed = 0;
  }


  getLeftCommand(): "stop" | "forward" | "backward" {
    return this._leftCommand;
  }

  setLeftCommand(value: "stop" | "forward" | "backward"): void {
    this._leftCommand = value;
  }

  getRightCommand(): "stop" | "forward" | "backward" {
    return this._rightCommand;
  }

  setRightCommand(value: "stop" | "forward" | "backward"): void {
    this._rightCommand = value;
  }

  getSpeed(): number {
    return this._speed;
  }

  setSpeed(value: number): void {
    this._speed = value;
  }
}
