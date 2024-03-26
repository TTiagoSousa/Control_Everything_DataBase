import { Injectable } from '@nestjs/common';
import { CreateSavingTransition } from './helpers/create.saving.transition';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';

@Injectable()
export class SavingsTransitionsService {

  async CreateSavingTransition(dto: createSavingTransition_dto, userId: string) {
    const result = await CreateSavingTransition(dto, userId);
    return result;
  }

}
