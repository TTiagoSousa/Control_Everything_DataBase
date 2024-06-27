import { Controller, Post, UseGuards, Req, Body } from '@nestjs/common';
import { SavingTransitionsService } from './saving-transitions.service';
import { JwtAuthGuard } from 'src/auth-user/jwt.guard';
import { Request } from 'express';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';

@Controller('saving-transitions')
export class SavingTransitionsController {
  constructor(private readonly savingTransitionsService: SavingTransitionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createSavingTransition(@Req() req: Request, @Body() dto: createSavingTransition_dto) {
    const userId = req.user['id'];
    return this.savingTransitionsService.createSavingTransition(dto, userId);
  }
}
