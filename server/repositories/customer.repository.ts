import { Customer, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class CustomerRepository extends BaseRepository<Customer> {
  constructor() {
    super('Customer', prisma);
  }

  async getListCustomer<T extends Prisma.CustomerFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>,
  ) {
    const customers = await prisma.customer.findMany(params);
    return customers;
  }
}

export default CustomerRepository;
