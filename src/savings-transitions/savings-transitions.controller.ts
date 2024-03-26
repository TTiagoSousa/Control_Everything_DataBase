import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { SavingsTransitionsService } from './savings-transitions.service';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';
import { Request } from 'express';

@Controller('savings-transitions')
export class SavingsTransitionsController {
  constructor(private readonly savingsTransitionsService: SavingsTransitionsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async createSavingTransition(@Req() req: Request, @Body() dto: createSavingTransition_dto) {
    const userId = req.user['id'];
    return this.savingsTransitionsService.CreateSavingTransition(dto, userId);
  }

}
