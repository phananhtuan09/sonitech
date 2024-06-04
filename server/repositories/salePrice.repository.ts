import { SalePrice, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class SalePriceRepository extends BaseRepository<SalePrice> {
  constructor() {
    super('SalePrice', prisma);
  }

  async getListSalePrice<T extends Prisma.SalePriceFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.SalePriceFindManyArgs>,
  ) {
    const salePrices = await prisma.salePrice.findMany(params);
    return salePrices;
  }
}

export default SalePriceRepository;
