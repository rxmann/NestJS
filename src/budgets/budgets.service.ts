import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class BudgetsService {
  
  constructor(private databaseService: DatabaseService) {}
  
  async create(createBudgetDto: Prisma.BudgetCreateInput) {
    return this.databaseService.budget.create({ data: createBudgetDto });
  }

  async findAll() {
    return this.databaseService.budget.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.budget.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateBudgetDto: Prisma.BudgetUpdateInput) {
    return this.databaseService.budget.update({
      where: {
        id,
      },
      data: updateBudgetDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.budget.delete({
      where: {
        id,
      },
    });
  }
}
