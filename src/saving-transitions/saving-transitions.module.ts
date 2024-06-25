import { Module } from '@nestjs/common';
import { SavingTransitionsService } from './saving-transitions.service';
import { SavingTransitionsController } from './saving-transitions.controller';

@Module({
  controllers: [SavingTransitionsController],
  providers: [SavingTransitionsService],
})
export class SavingTransitionsModule {}
