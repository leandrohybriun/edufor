import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { Prisma } from 'generated';
import { userPvs } from 'src/common/config/user-pvs.config';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async get(where: Prisma.UserWhereUniqueInput) {
    const user = await this.usersRepository.findUnique({ where });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }

  async getAll({
    take,
    skip,
    pv,
  }: {
    take?: number;
    skip?: number;
    pv?: number;
  }) {
    return this.usersRepository.findMany({
      where: { pv },
      orderBy: { created_at: 'desc' },
      take,
      skip,
    });
  }

  async getCollaborators() {
    return this.usersRepository.findMany({
      where: { pv: { equals: userPvs.collaborator } },
      orderBy: { created_at: 'desc' },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findFirst({
      where: {
        OR: [{ email: createUserDto.email }, { phone: createUserDto.phone }],
      },
    });

    if (existingUser) {
      if (existingUser.email === createUserDto.email) {
        throw new BadRequestException('Email já está em uso');
      }

      if (existingUser.phone === createUserDto.phone) {
        throw new BadRequestException('Telefone já está em uso');
      }
    }

    const hashedPassword = await hash(createUserDto.password, 10);

    return this.usersRepository.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: hashedPassword,
        phone: createUserDto.phone,
        pv: createUserDto.pv,
      },
    });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersRepository.findUnique({ where });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (updateUserDto.email && updateUserDto.email !== user.email) {
      const existingEmail = await this.usersRepository.findUnique({
        where: { email: updateUserDto.email },
      });

      if (existingEmail) {
        throw new BadRequestException('Email já está em uso');
      }
    }

    if (updateUserDto.phone && updateUserDto.phone !== user.phone) {
      const existingPhone = await this.usersRepository.findUnique({
        where: { phone: updateUserDto.phone },
      });

      if (existingPhone) {
        throw new BadRequestException('Telefone já está em uso');
      }
    }

    const updatedPassword = updateUserDto.password
      ? await hash(updateUserDto.password, 10)
      : user.password;

    return this.usersRepository.update({
      where,
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        phone: updateUserDto.phone,
        pv: updateUserDto.pv,
        password: updatedPassword,
      },
    });
  }

  async delete(where: Prisma.UserWhereUniqueInput) {
    const user = await this.usersRepository.findUnique({ where });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.usersRepository.delete({ where });

    return { message: 'Usuário deletado com sucesso' };
  }

  async validateCredentials(email: string, password: string) {
    const user = await this.usersRepository.findUnique({
      where: { email },
    });

    if (!user) throw new NotFoundException('Usuário não encontrado');

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    return user;
  }
}
