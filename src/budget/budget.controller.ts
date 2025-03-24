import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Budget } from './dto/budget.dto';

@Controller('budgets')
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  create(@Body() budget: Budget) {
    return this.budgetService.create(budget);
  }

  @Get()
  findAll() {
    return this.budgetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.budgetService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() budget: Budget) {
    return this.budgetService.update(+id, budget);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.budgetService.delete(+id);
  }
}
