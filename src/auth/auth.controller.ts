import { Body, Controller, Get, Param, Post, Res, Req, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signup_dto } from 'src/user/dto/signup.dto';
import { signin_employee_dto } from 'src/employee/dto/signin.employee.dto';
import { signin_dto } from 'src/user/dto/signin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup_user')
  async signup_User(@Body() dto: signup_dto) {

    return this.authService.signup_User(dto);
  }

  @Post('signin_employee')
  async signin_Employee(@Body() dto: signin_employee_dto, @Req() req, @Res() res) {

    return this.authService.signin_Employee(dto, req, res);
  }

  @Get('activate_user/:token')
  async activateAccount_User(@Param('token') token: string) {

    await this.authService.activateAccount_User(token);

    return
  }

  @Post('signin_user')
  async signin_User(@Body() dto: signin_dto, @Req() req, @Res() res) {

    return this.authService.signin_User(dto, req, res);
  }

  @Post('send-email-to-reset-password')
  async sendPasswordResetEmail(@Body('email') email: string) {

   await this.authService.sendResetPasswordEmail(email)

    return;
  }
}
