import { Module } from '@nestjs/common';
import { BudgetsModule } from './budgets/budgets.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BudgetsModule, UsersModule],
})
export class AppModule {}
