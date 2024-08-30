/*
  Warnings:

  - Added the required column `endpoint` to the `pages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pages" ADD COLUMN     "endpoint" TEXT NOT NULL;
