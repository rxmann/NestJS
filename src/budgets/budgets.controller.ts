import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BudgetsService } from './budgets.service';
import { Prisma } from '@prisma/client';

@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Post()
  create(@Body() createBudgetDto: Prisma.BudgetCreateInput) {
    return this.budgetsService.create(createBudgetDto);
  }

  @Get()
  findAll() {
    return this.budgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: Prisma.BudgetUpdateInput) {
    return this.budgetsService.update(+id, updateBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetsService.remove(+id);
  }
}
