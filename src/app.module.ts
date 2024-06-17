import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { UserModule } from './user/user.module';
import { AuthUserModule } from './auth-user/auth-user.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [CountriesModule, UserModule, AuthUserModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
