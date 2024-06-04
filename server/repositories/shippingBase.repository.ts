import { ShippingBase, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class ShippingBaseRepository extends BaseRepository<ShippingBase> {
  constructor() {
    super('ShippingBase', prisma);
  }

  async getListShippingBase<T extends Prisma.ShippingBaseFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.ShippingBaseFindManyArgs>,
  ) {
    const shippingBases = await prisma.shippingBase.findMany(params);
    return shippingBases;
  }
}

export default ShippingBaseRepository;
