import {Body, Controller, Get, Header, HttpCode, Post} from '@nestjs/common';
import {TrackControlService} from "./track-control.service";
import {readFileSync} from 'fs';

const config = JSON.parse(readFileSync("conf.json").toString());

@Controller(config.url || "api/v1")
export class TrackControlController {
    constructor(private trackControlService: TrackControlService) {}

    @Get("state")
    @Header("content-type", "application/json")
    getTrackState(): string{
        return this.trackControlService.getState();
    }

    @Post("command")
    @HttpCode(201)
    async setTrackCommand(@Body() body: Body): Promise<void> {
        const jbody =  await JSON.parse(JSON.stringify(body));
        const command: "stop" | "forward" | "back" | "left" | "right" = jbody.command.toLowerCase();
        const speed: number = jbody.speed;
        this.trackControlService.setCommand(command,speed);
    }
}
//
