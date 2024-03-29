import { Injectable } from '@nestjs/common';
import { CreateSavingTransition } from './helpers/create.saving.transition';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';
import { getTotalTransitionsByUserId } from './helpers/get.total.transitions.by.user';
import { getTotalConverted } from './helpers/get.total.converted';

@Injectable()
export class SavingsTransitionsService {

  async CreateSavingTransition(dto: createSavingTransition_dto, userId: string) {
    const result = await CreateSavingTransition(dto, userId);
    return result;
  }

  async getTotalTransitionsByUserId(userId: string) {
    const result = await getTotalTransitionsByUserId(userId);
    return result;
  }

  async getTotalConverted(userId: string,baseCurrency: string, targetCurrencyPair: string){
    const result = await getTotalConverted(userId, baseCurrency, targetCurrencyPair);
    
    return result
  }
}
