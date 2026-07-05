/*
  Warnings:

  - You are about to drop the column `bloodGroup` on the `PregnancyRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PregnancyRecord" DROP COLUMN "bloodGroup";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bloodGroup" TEXT;
