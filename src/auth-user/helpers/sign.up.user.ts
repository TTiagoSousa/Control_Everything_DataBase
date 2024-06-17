import { BadRequestException } from "@nestjs/common";
import { Gender } from "@prisma/client";
import { PrismaCountriesRepository } from "src/countries/repositories/prisma/prisma-countries-repository";
import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";

export async function signupUser(
  dto: signup_dto,
) {

  const usersRepository = new PrismaUsersRepository();
  const countryRepository = new PrismaCountriesRepository();

  const creationResult = await usersRepository.create({
    email: email,
    fullName: capitalizedFullName,
    dateOfBirth: dateOfBirthObj,
    countryId: country,
    hashedPassword: hashedPassword,
    gender: gender as Gender,
  });

  return creationResult
}