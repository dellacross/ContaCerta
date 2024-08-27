-- CreateTable
CREATE TABLE "pages" (
    "id" TEXT NOT NULL,
    "pageName" TEXT NOT NULL,
    "adminOnly" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);
