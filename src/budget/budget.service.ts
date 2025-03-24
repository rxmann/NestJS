import { Injectable } from '@nestjs/common';
import { Budget } from './dto/budget.dto';

@Injectable()
export class BudgetService {
  private budgets: Budget[] = [
    {
      id: 0,
      name: 'headset',
      amount: 5000,
    },
  ];

  constructor(
    // @Inject(forwardRef(() => UserService)) private userService: UserService
  ) {}

  create(budget: Budget) {
    this.budgets.push(budget);
    return budget;
  }

  findAll() {
    return this.budgets;
  }

  findOne(id: number) {
    return this.budgets.find((b) => b.id === id);
  }

  update(id: number, updatedBudget: Budget) {
    const index = this.budgets.findIndex((b) => b.id === id);
    if (index === -1) return null;
    this.budgets[index] = updatedBudget;
    return updatedBudget;
  }

  delete(id: number) {
    this.budgets = this.budgets.filter((b) => b.id !== id);
    return { message: 'Deleted successfully' };
  }
}
