/*
  Warnings:

  - You are about to drop the column `last_data` on the `expenses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "last_data",
ADD COLUMN     "last_date" TEXT;
