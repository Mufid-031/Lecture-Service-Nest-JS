/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Lecture` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Lecture_userId_key` ON `Lecture`(`userId`);
