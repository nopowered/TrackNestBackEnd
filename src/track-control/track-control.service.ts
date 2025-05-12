import { Injectable } from '@nestjs/common';

@Injectable()
export class TrackControlService {
    private command: string;
    private speed: number;

    constructor() {
        this.command = "stop";
        this.speed = 255;
    }

    getState(): string {
        return JSON.stringify({
            "command": this.command,
            "speed": this.speed
        })
    }

    setCommand(command: string,speed: number): void {
        this.command = command;
        this.speed = speed;

        console.log(`Command: ${command}\t Speed: ${speed}`);
    }
}
