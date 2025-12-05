import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    // if (req.user) {
    //   return req.user;
    // }

    const user = {
      name: 'Ridoy',
      email: 'ss@gmail.com',
      pass: '343948kdjf',
      role: 'faul',
    };

    if (user) {
      return user;
    }
    throw new HttpException('user not found ', HttpStatus.BAD_REQUEST);
  },
);
