import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { CountriesModule } from './countries/countries.module';

@Module({
  imports: [AuthModule, UserModule, EmployeeModule, CountriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
