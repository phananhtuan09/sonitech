import { Information, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class InformationRepository extends BaseRepository<Information> {
  constructor() {
    super('Information', prisma);
  }

  async getListInformation<T extends Prisma.InformationFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.InformationFindManyArgs>,
  ) {
    const informations = await prisma.information.findMany(params);
    return informations;
  }
}

export default InformationRepository;
