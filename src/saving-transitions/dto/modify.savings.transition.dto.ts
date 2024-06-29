import { IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TransitionType } from '@prisma/client';

export class modifySavingTransition_dto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;  // Add this line to include the transition ID

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TransitionType, {
    message: 'O campo transitionType deve ser um dos valores: DEPOSIT, WITHDRAWAL, TRANSFER',
  }) 
  transitionType: TransitionType;

  @ApiProperty()
  @IsNotEmpty()
  currencyTypeID: string;

  @ApiProperty()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  platformID: string;

  @ApiProperty()
  @IsNotEmpty() 
  amount: number;

  @ApiProperty()
  @IsOptional() 
  description: string;
}