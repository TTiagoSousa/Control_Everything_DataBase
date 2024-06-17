import { Injectable } from '@nestjs/common';
import { signupUser } from './helpers/sign.up.user';
import { signup_dto } from 'src/user/dto/sing.up.user.dto';

@Injectable()
export class AuthUserService {

  async signupUser(dto: signup_dto) {
    const result = await signupUser(dto);
    return result;
  }

}
