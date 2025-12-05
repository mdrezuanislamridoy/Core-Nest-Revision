import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const AuthToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const token = ctx
      .switchToHttp()
      .getRequest()
      .headers['authorization'].split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('User not available ');
    }
    return token;
  },
);
