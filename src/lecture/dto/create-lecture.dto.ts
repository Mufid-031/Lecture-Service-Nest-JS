import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Gender } from '../entities/lecture.entity';

export class CreateLectureDto {
  @IsInt()
  userId: number;

  @IsString()
  nip: string;

  @IsEnum(['MALE', 'FEMALE'])
  gender: Gender;

  @IsString()
  major: string;

  @IsString()
  faculty: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  phone?: string;
}
