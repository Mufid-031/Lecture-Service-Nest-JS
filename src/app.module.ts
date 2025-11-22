import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LectureModule } from './lecture/lecture.module';

@Module({
  imports: [PrismaModule, AuthModule, LectureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
