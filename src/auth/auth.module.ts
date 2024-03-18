import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { EmployeeService } from 'src/employee/employee.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from 'src/utils/constants';
import { JwtStrategy } from './jwt.strategy';
import { EmailService } from 'src/email/email.service';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtSecret, // Replace with your actual secret key
      signOptions: { expiresIn: '1d' }, // Token expiration
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, EmployeeService, JwtStrategy, EmailService, UserService],
})
export class AuthModule {}