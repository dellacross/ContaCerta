/*
  Warnings:

  - You are about to drop the `_MemberGroups` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `group_id` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_MemberGroups" DROP CONSTRAINT "_MemberGroups_A_fkey";

-- DropForeignKey
ALTER TABLE "_MemberGroups" DROP CONSTRAINT "_MemberGroups_B_fkey";

-- AlterTable
ALTER TABLE "members" ADD COLUMN     "group_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "_MemberGroups";

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
