import { Injectable } from '@nestjs/common';
import { createSavingTransition } from './helpers/create.saving.transition';
import { createSavingTransition_dto } from './dto/create.savings.transition.dto';
import { getTotalNumberOfSavingTransitions } from './helpers/get.total.number.of.saving.transitions';
import { getAllSavingsTransitionsWithPagination } from './helpers/get.all.saving.transitions.with.pagination';
import { enableSavingTransition } from './helpers/enable.saving.transition';
import { disableSavingTransition } from './helpers/disable.saving.transition';

@Injectable()
export class SavingTransitionsService {

  async createSavingTransition(dto: createSavingTransition_dto, userId: string) {
    const result = await createSavingTransition(dto, userId);
    return result;
  }

  async getTotalNumberOfSavingTransitions(userId: string) {
    const result = await getTotalNumberOfSavingTransitions(userId);
    return result;
  }

  async getAllSavingsTransitionsWithPagination(userId: string, perPage?: number, page?: number) {
    const result = await getAllSavingsTransitionsWithPagination(userId, perPage, page);
    return result;
  }

  async disableSavingTransition(userId: string,transitionId: string){
    const result = await disableSavingTransition(userId,transitionId);

    return result
  }

  async enableSavingTransition(userId: string, transitionId: string){
    const result = await enableSavingTransition(userId, transitionId);

    return result
  }
}
