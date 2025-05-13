import { Module } from '@nestjs/common';
import { PrismaModule } from './databases/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule],
  providers: [],
})
export class AppModule {}
