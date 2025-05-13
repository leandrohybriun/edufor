import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated';
import { PrismaService } from 'src/databases/prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  total({ where }: { where: Prisma.UserWhereInput }) {
    return this.prismaService.user.count({ where });
  }

  findUnique({
    where,
    select,
  }: {
    where: Prisma.UserWhereUniqueInput;
    select?: Prisma.UserSelect;
  }) {
    return this.prismaService.user.findUnique({ where, select });
  }

  findFirst({
    where,
    select,
  }: {
    where: Prisma.UserWhereInput;
    select?: Prisma.UserSelect;
  }) {
    return this.prismaService.user.findFirst({ where, select });
  }

  findMany({
    where,
    orderBy,
    select,
    take,
    skip,
  }: {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    select?: Prisma.UserSelect;
    take?: number;
    skip?: number;
  }) {
    return this.prismaService.user.findMany({
      where,
      orderBy,
      select,
      take,
      skip,
    });
  }

  create({ data }: { data: Prisma.UserCreateInput }) {
    return this.prismaService.user.create({ data });
  }

  update({
    where,
    data,
  }: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    return this.prismaService.user.update({ where, data });
  }

  delete({ where }: { where: Prisma.UserWhereUniqueInput }) {
    return this.prismaService.user.delete({ where });
  }
}
