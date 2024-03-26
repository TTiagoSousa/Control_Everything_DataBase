-- CreateEnum
CREATE TYPE "TransitionTypeRole" AS ENUM ('DEPOSIT', 'WITHDRAWAL', 'TRANSFER');

-- CreateTable
CREATE TABLE "SavingsTransitions" (
    "id" TEXT NOT NULL,
    "transitionID" TEXT NOT NULL,
    "transitionType" "TransitionTypeRole" NOT NULL DEFAULT 'DEPOSIT',
    "data" TEXT NOT NULL,
    "hour" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "currencyType" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "SavingsTransitions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavingsTransitions" ADD CONSTRAINT "SavingsTransitions_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
