import { User, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class UserRepository extends BaseRepository<User> {
  constructor() {
    super('User', prisma);
  }

  async getListUser<T extends Prisma.UserFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
  ) {
    const users = await prisma.user.findMany(params);
    return users;
  }
}

export default UserRepository;
