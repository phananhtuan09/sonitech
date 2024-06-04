import { PurchasingPrice, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class PurchasingPriceRepository extends BaseRepository<PurchasingPrice> {
  constructor() {
    super('PurchasingPrice', prisma);
  }

  async getListPurchasingPrice<T extends Prisma.PurchasingPriceFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.PurchasingPriceFindManyArgs>,
  ) {
    const purchasingPrices = await prisma.purchasingPrice.findMany(params);
    return purchasingPrices;
  }
}

export default PurchasingPriceRepository;
