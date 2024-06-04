import { Code, Prisma } from '@prisma/client';
import BaseRepository from './base.repository';
import prisma from '../prisma/prismaClient';

class CodeRepository extends BaseRepository<Code> {
  constructor() {
    super('Code', prisma);
  }

  async getListCode<T extends Prisma.CodeFindManyArgs>(
    params?: Prisma.SelectSubset<T, Prisma.CodeFindManyArgs>,
  ) {
    const codes = await prisma.code.findMany(params);
    return codes;
  }
}

export default CodeRepository;
