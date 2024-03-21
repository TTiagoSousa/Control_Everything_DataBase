import { PrismaUsersRepository } from "src/user/repositories/prisma/prisma-user-repisitory";
import { signup_dto } from "src/user/dto/signup.dto";
import { Gender } from "@prisma/client";
import { hashPassword } from "../../../utils/password/hashPassword";
import { BadRequestException } from "@nestjs/common";
import { isValidEmail } from "../../../utils/email/is.valide.email";
import { isStrongPassword } from "src/utils/password/is.password.strong";
import { containsOnlyLetters } from "src/utils/text/contains.only.letters";
import { GetCountriesFromDataBase } from "src/countries/helpers/get.countries.from.database";
import { JwtService } from '@nestjs/jwt';
import { EmailService } from 'src/email/email.service';
import { sendActivationEmail } from "./send.activation.email";

export async function signup_User (
  dto: signup_dto,
  jwt: JwtService,
  emailService: EmailService,
) {

  const usersRepository = new PrismaUsersRepository();

  const { email, password, fullName, confirmPassword, dateOfBirth, country, gender } = dto;

  const activationToken = jwt.sign({ email }, { expiresIn: '1d' });

  const foundUser = await usersRepository.findByEmail(email);
  if (foundUser) {
    throw new BadRequestException('Email already exists')
  }

  if (!isStrongPassword(password)) {
    throw new BadRequestException('Password Weak')
  }

  if (!isValidEmail(email)) {
    throw new BadRequestException('Invalid email')
  }

  const coutries = await GetCountriesFromDataBase();
  const requestedCountry = coutries.find(c => c.countryNameEn === dto.country);

  if (!requestedCountry) {
    throw new BadRequestException('Invalid country')
  }

  if (password !== confirmPassword) {
    throw new BadRequestException('Password and confirm password must be de same');
  }

  const isoDateOfBirth = new Date(dateOfBirth).toISOString();

  const capitalizedFullName = fullName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  if(!containsOnlyLetters(capitalizedFullName)) {
    throw new BadRequestException('Full name must contain only letters');
  }

  const validGenders: string[] = Object.values(Gender) as string[];
  if (!validGenders.includes(gender.toUpperCase())) {
    throw new BadRequestException('Gender is not valid');
  }

  const hashedPassword = await hashPassword(password);

  await sendActivationEmail(email, activationToken, fullName, emailService);

  const creationResult = await usersRepository.create({
    email: email,
    fullName: capitalizedFullName,
    dateOfBirth: isoDateOfBirth,
    country,
    hashedPassword: hashedPassword,
    gender: gender.toUpperCase() as Gender,
  });

  return {
    message: 'User created successfully',
  };
} 
