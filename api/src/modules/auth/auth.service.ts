import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/shared/interfaces/jwt-payload.interface';
import { UsersService } from '../users/users.service';
import { LoginPayloadDto } from './dto/login-payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginPayloadDto) {
    const user = await this.usersService.validateCredentials(email, password);

    const payload: JwtPayload = {
      email: user.email,
      sub: user.id,
      pv: user.pv,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        pv: user.pv,
      },
    };
  }

  async me({ sub }: JwtPayload) {
    const user = await this.usersService.get({ id: sub });

    if (!user) throw new NotFoundException('Usuário não encontrado');

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      pv: user.pv,
    };
  }
}
