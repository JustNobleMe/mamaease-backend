/*
  Warnings:

  - You are about to drop the column `date` on the `HydrationRecord` table. All the data in the column will be lost.
  - You are about to drop the column `free` on the `MidWife` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `WeightRecord` table. All the data in the column will be lost.
  - Added the required column `fee` to the `MidWife` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "HydrationRecord" DROP COLUMN "date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "MidWife" DROP COLUMN "free",
ADD COLUMN     "fee" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "deliveryAddress" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "WeightRecord" DROP COLUMN "date",
ADD COLUMN     "recordedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
