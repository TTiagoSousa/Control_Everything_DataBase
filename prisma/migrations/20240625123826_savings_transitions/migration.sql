-- CreateEnum
CREATE TYPE "TransitionType" AS ENUM ('DEPOSIT', 'WITHDRAWAL');

-- CreateTable
CREATE TABLE "SavingTransition" (
    "id" TEXT NOT NULL,
    "transitionType" "TransitionType" NOT NULL,
    "platformID" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currencyTypeID" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "SavingTransition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavingTransition" ADD CONSTRAINT "SavingTransition_platformID_fkey" FOREIGN KEY ("platformID") REFERENCES "Platform"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingTransition" ADD CONSTRAINT "SavingTransition_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingTransition" ADD CONSTRAINT "SavingTransition_currencyTypeID_fkey" FOREIGN KEY ("currencyTypeID") REFERENCES "Currency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
