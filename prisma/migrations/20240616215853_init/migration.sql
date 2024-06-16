-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female', 'other', 'unknown');

-- CreateEnum
CREATE TYPE "EmployeeRole" AS ENUM ('ADMIN', 'PROGRAMMER', 'CUSTOMER_SUPPORT', 'NOT_ASSIGNED');

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "employeeNumber" INTEGER NOT NULL,
    "jobTitle" "EmployeeRole" NOT NULL DEFAULT 'NOT_ASSIGNED',
    "countryId" TEXT NOT NULL,
    "gender" "Gender" NOT NULL DEFAULT 'unknown',

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Countries" (
    "id" TEXT NOT NULL,
    "countryNamePt" TEXT NOT NULL,
    "countryNameEn" TEXT NOT NULL,
    "CoutryFlag" TEXT NOT NULL,

    CONSTRAINT "Countries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_id_key" ON "Employee"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employeeNumber_key" ON "Employee"("employeeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_id_key" ON "Countries"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_countryNamePt_key" ON "Countries"("countryNamePt");

-- CreateIndex
CREATE UNIQUE INDEX "Countries_countryNameEn_key" ON "Countries"("countryNameEn");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
