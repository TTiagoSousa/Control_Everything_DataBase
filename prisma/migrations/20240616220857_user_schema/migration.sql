-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('notPaid', 'paid');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "isPaidUser" BOOLEAN NOT NULL DEFAULT false,
    "gender" "Gender" NOT NULL DEFAULT 'unknown',
    "role" "UserRole" NOT NULL DEFAULT 'paid',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
