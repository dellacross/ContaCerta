/*
  Warnings:

  - Added the required column `nickname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `admin` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "balance" TEXT DEFAULT '0',
ADD COLUMN     "nickname" TEXT NOT NULL,
ALTER COLUMN "admin" SET NOT NULL;

-- CreateTable
CREATE TABLE "goals" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "monthlyContribution" TEXT NOT NULL,
    "achieved" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "goals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
