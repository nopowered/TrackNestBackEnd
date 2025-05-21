import { Injectable } from '@nestjs/common';
import { Gpio } from 'pigpio';

@Injectable()
export class TrackSideService {
  private forwardPin: Gpio;
  private backPin: Gpio;

  constructor(forwardPin: number, backPin: number) {
    this.forwardPin = new Gpio(forwardPin, { mode: Gpio.OUTPUT });
    this.backPin = new Gpio(backPin, { mode: Gpio.OUTPUT });
  }

  write(command: 'forward' | 'stop' | 'back'): void {
    switch (command) {
      case 'back': {
        this.forwardPin.digitalWrite(0);
        this.backPin.digitalWrite(1);
        break;
      }

      case 'stop': {
        this.forwardPin.digitalWrite(0);
        this.backPin.digitalWrite(0);
        break;
      }

      case 'forward': {
        this.forwardPin.digitalWrite(1);
        this.backPin.digitalWrite(0);
        break;
      }

      default: {
        throw new Error("GPIO error");
      }
    }
  }
}
