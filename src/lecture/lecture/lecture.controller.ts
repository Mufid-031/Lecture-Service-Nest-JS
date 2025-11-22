/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LectureService } from './lecture.service';
import { CreateLectureDto } from '../dto/create-lecture.dto';
import { LectureEntity } from '../entities/lecture.entity';
import { UpdateLectureDto } from '../dto/update-lecture.dto';

@Controller('lecture')
@ApiTags('Lecture')
@UseGuards(JwtAuthGuard)
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({ type: LectureEntity })
  async create(@Body() createDto: CreateLectureDto) {
    return await this.lectureService.create(createDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: LectureEntity, isArray: true })
  findAll() {
    return this.lectureService.findAll();
  }

  @Get('profile')
  @ApiBearerAuth()
  @ApiOkResponse({ type: LectureEntity })
  profile(@Req() req) {
    return this.lectureService.findByUserId(req.user.id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: LectureEntity })
  update(@Param('id') id: string, @Body() updateDto: UpdateLectureDto) {
    return this.lectureService.update(+id, updateDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: LectureEntity })
  remove(@Param('id') id: string) {
    return this.lectureService.remove(+id);
  }
}
