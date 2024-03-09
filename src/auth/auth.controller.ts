import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signup_dto } from 'src/user/dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup_user')
  async signup_User(@Body() dto: signup_dto) {

    return this.authService.signup_User(dto);
  }
}
