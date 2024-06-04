import { Supplier, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class SupplierRepository extends BaseRepository<Supplier> {
  constructor() {
    super('Supplier', prisma);
  }

  async getListSupplier<T extends Prisma.SupplierFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.SupplierFindManyArgs>,
  ) {
    const suppliers = await prisma.supplier.findMany(params);
    return suppliers;
  }
}

export default SupplierRepository;
