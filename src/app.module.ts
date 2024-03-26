import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { CountriesModule } from './countries/countries.module';
import { EmailModule } from './email/email.module';
import { CurrencyModule } from './currency/currency.module';
import { SavingsTransitionsModule } from './savings-transitions/savings-transitions.module';

@Module({
  imports: [AuthModule, UserModule, EmployeeModule, CountriesModule, EmailModule, CurrencyModule, SavingsTransitionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
