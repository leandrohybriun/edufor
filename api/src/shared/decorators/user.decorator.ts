import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from 'src/shared/interfaces/jwt-payload.interface';

export const User = createParamDecorator(
  (_: never, ctx: ExecutionContext): JwtPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as JwtPayload;
  },
);
