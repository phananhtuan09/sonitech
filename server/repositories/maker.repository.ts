import { Maker, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class MakerRepository extends BaseRepository<Maker> {
  constructor() {
    super('Maker', prisma);
  }

  async getListMaker<T extends Prisma.MakerFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.MakerFindManyArgs>,
  ) {
    const makers = await prisma.maker.findMany(params);
    return makers;
  }
}

export default MakerRepository;
