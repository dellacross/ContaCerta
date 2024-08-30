-- AlterTable
ALTER TABLE "expenses" ADD COLUMN     "card_id" TEXT;

-- CreateTable
CREATE TABLE "bankcards" (
    "id" TEXT NOT NULL,
    "cardName" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "bank_id" TEXT NOT NULL,

    CONSTRAINT "bankcards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bankcards" ADD CONSTRAINT "bankcards_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "bank_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
