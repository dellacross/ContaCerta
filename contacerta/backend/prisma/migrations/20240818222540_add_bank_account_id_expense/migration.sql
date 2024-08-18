-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "bank_account_id" TEXT,
ALTER COLUMN "installments" DROP NOT NULL;
