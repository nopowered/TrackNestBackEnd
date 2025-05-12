import {Body, Controller, Get, Header, HttpCode, Post} from '@nestjs/common';
import {TrackControlService} from "./track-control.service";

@Controller("api/v1/track-control")
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

        this.trackControlService.setCommand(jbody.command,jbody.speed);
    }
}
