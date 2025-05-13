import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './databases/prisma/prisma.module';
import { RedisModule } from './databases/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    RedisModule,
  ],
  providers: [],
})
export class AppModule {}
