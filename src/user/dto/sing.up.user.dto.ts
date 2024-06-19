/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class signup_dto {

  @ApiProperty()
  @IsNotEmpty()
  dateOfBirth:  Date;

  @ApiProperty()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsNotEmpty()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  confirmPassword: string;
}