/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEnum, IsOptional  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TransitionTypeRole } from '@prisma/client';

export class createSavingTransition_dto {

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TransitionTypeRole, {
    message: 'O campo transitionType deve ser um dos valores: DEPOSIT, WITHDRAWAL, TRANSFER',
  }) 
  transitionType: TransitionTypeRole;

  @ApiProperty()
  @IsNotEmpty()
  currencyType: string

  @ApiProperty()
  @IsNotEmpty()
  data: string;

  @ApiProperty()
  @IsNotEmpty()
  hour: string;

  @ApiProperty()
  @IsNotEmpty()
  platform: string;

  @ApiProperty()
  @IsNotEmpty() 
  amount: number;

  @ApiProperty()
  @IsOptional() 
  description: string;

}