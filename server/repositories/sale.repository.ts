import { Sale, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class SaleRepository extends BaseRepository<Sale> {
  constructor() {
    super('Sale', prisma);
  }

  async getListSale<T extends Prisma.SaleFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.SaleFindManyArgs>,
  ) {
    const sales = await prisma.sale.findMany(params);
    return sales;
  }
}

export default SaleRepository;
