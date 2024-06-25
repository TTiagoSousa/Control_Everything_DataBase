import { Body, Controller, Post, Get } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { addNewPlatform_dto } from './dto/add.new.platform';
@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Post('add-new-platform')
  async signup_User(@Body() dto: addNewPlatform_dto) {

    return this.platformsService.addNewPlatform(dto);
  }
}
