import { Injectable } from '@nestjs/common';
import { signup_User } from './helpers/user/signup';
import { signup_dto } from 'src/user/dto/signup.dto';

@Injectable()
export class AuthService {

  async signup_User(dto: signup_dto) {
    const result = await signup_User(dto);
    return result;
  }

}
