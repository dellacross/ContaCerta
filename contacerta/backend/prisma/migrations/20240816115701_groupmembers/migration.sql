/*
  Warnings:

  - You are about to drop the column `group_id` on the `members` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "members" DROP CONSTRAINT "members_group_id_fkey";

-- AlterTable
ALTER TABLE "members" DROP COLUMN "group_id";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "rent" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_MemberGroups" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MemberGroups_AB_unique" ON "_MemberGroups"("A", "B");

-- CreateIndex
CREATE INDEX "_MemberGroups_B_index" ON "_MemberGroups"("B");

-- AddForeignKey
ALTER TABLE "_MemberGroups" ADD CONSTRAINT "_MemberGroups_A_fkey" FOREIGN KEY ("A") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberGroups" ADD CONSTRAINT "_MemberGroups_B_fkey" FOREIGN KEY ("B") REFERENCES "members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
