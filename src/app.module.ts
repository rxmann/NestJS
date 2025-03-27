import { Module } from '@nestjs/common';
import { BudgetsModule } from './budgets/budgets.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [BudgetsModule, UsersModule, AuthModule],
})
export class AppModule {}
