import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { accessLevels } from 'src/common/config/access-levels.config';
import { httpMessages } from 'src/common/config/http-messages.config';
import { UsersService } from 'src/modules/users/users.service';
import { IS_PUBLIC_KEY } from '../decorators/is-public.decorator';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class AccessLevelGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const { sub, pv } = request.user as JwtPayload;

    const user = await this.usersService.get({ id: sub });

    if (!user || user.pv !== pv) {
      throw new UnauthorizedException(httpMessages.permissionDenied);
    }

    const routePath = request.originalUrl;
    const method = request.method;

    const matchingRoutes = Object.keys(accessLevels).filter((path) =>
      routePath.startsWith(path),
    );

    let permissions: number[] | undefined;

    for (const route of matchingRoutes) {
      if (accessLevels[route][method]) {
        permissions = accessLevels[route][method];
        break;
      }
    }

    if (!permissions) {
      throw new UnauthorizedException(httpMessages.permissionDenied);
    }

    const hasPermission = permissions.includes(pv);

    if (!hasPermission) {
      throw new UnauthorizedException(httpMessages.permissionDenied);
    }

    return true;
  }
}
