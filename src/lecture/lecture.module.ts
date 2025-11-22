import { Module } from '@nestjs/common';
import { LectureService } from './lecture/lecture.service';
import { LectureController } from './lecture/lecture.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  providers: [LectureService],
  controllers: [LectureController],
})
export class LectureModule {}
