/*
  Warnings:

  - You are about to drop the column `form_of_payment_id` on the `expenses` table. All the data in the column will be lost.
  - Added the required column `installments` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_method_id` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "form_of_payment_id",
ADD COLUMN     "installments" INTEGER NOT NULL,
ADD COLUMN     "payment_method_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "paymentmethods" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "paymentmethods_pkey" PRIMARY KEY ("id")
);
