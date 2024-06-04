import { PrismaClient, Prisma } from '@prisma/client';

class BaseRepository<ModelType> {
  private prisma: PrismaClient;

  private model: Prisma.ModelName;

  constructor(model: Prisma.ModelName, prismaClient?: PrismaClient) {
    this.prisma = prismaClient || new PrismaClient();
    this.model = model;
  }

  async create(data: any): Promise<ModelType> {
    return (await this.prisma[this.model].create({ data })) as ModelType;
  }

  async findMany(params: any): Promise<any> {
    return await this.prisma[this.model].findMany(params);
  }

  async findOne(params: any): Promise<ModelType | null> {
    return (await this.prisma[this.model].findUnique({
      where: params,
    })) as ModelType | null;
  }

  async update(id: number, data: any): Promise<ModelType> {
    return (await this.prisma[this.model].update({
      where: { id },
      data,
    })) as ModelType;
  }

  async delete(id: number): Promise<ModelType> {
    return (await this.prisma[this.model].delete({
      where: { id },
    })) as ModelType;
  }
}

export default BaseRepository;
