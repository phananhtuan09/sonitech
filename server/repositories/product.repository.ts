import { Product, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class ProductRepository extends BaseRepository<Product> {
  constructor() {
    super('Product', prisma);
  }

  async getListProduct<T extends Prisma.ProductFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.ProductFindManyArgs>,
  ) {
    const products = await prisma.product.findMany(params);
    return products;
  }
}

export default ProductRepository;
