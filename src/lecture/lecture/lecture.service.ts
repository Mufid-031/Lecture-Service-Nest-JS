/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateLectureDto } from '../dto/create-lecture.dto';
import { UpdateLectureDto } from '../dto/update-lecture.dto';

@Injectable()
export class LectureService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreateLectureDto) {
    return await this.prisma.lecture.create({ data: createDto });
  }

  findAll() {
    return this.prisma.lecture.findMany();
  }

  async findOne(id: number) {
    const lecture = await this.prisma.lecture.findUnique({ where: { id } });

    if (!lecture) {
      throw new NotFoundException('Lecture not found');
    }

    return lecture;
  }

  async findByUserId(userId: number) {
    return await this.prisma.lecture.findUnique({ where: { userId } });
  }

  async update(id: number, updateDto: UpdateLectureDto) {
    return await this.prisma.lecture.update({ where: { id }, data: updateDto });
  }

  remove(id: number) {
    return this.prisma.lecture.delete({ where: { id } });
  }
}
