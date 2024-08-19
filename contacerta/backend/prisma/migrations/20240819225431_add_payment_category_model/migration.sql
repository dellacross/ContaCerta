/*
  Warnings:

  - Added the required column `payment_category_id` to the `expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "payment_category_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "paymentcategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paymentcategories_pkey" PRIMARY KEY ("id")
);
