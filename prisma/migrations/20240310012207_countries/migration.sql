-- CreateTable
CREATE TABLE "Coutries" (
    "id" SERIAL NOT NULL,
    "countryNamePt" TEXT NOT NULL,
    "countryNameEn" TEXT NOT NULL,
    "CoutryFlag" TEXT NOT NULL,

    CONSTRAINT "Coutries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Coutries_countryNamePt_key" ON "Coutries"("countryNamePt");

-- CreateIndex
CREATE UNIQUE INDEX "Coutries_countryNameEn_key" ON "Coutries"("countryNameEn");
