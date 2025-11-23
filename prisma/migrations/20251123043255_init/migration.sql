/*
  Warnings:

  - Added the required column `faculty` to the `Lecture` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `lecture` ADD COLUMN `faculty` VARCHAR(191) NOT NULL;
