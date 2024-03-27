import { Body, Controller, Post, UseGuards, Req, Get, Param } from '@nestjs/common';
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

  @UseGuards(JwtAuthGuard)
  @Get(':userId/total-of-saving-transitions')
  async getTotalTransitionsByUserId(@Param('userId') userId: string) {
    return this.savingsTransitionsService.getTotalTransitionsByUserId(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':userId/get-total-converted/:targetCurrencyPair')
  async getTotalConverted(
    @Param('userId') userId: string,
    @Param('targetCurrencyPair') targetCurrencyPair: string,
  ) {

    const baseCurrency = 'USD';

    const totalConverted = await this.savingsTransitionsService.getTotalConverted(userId, baseCurrency, targetCurrencyPair);

    return totalConverted 
  }
}
