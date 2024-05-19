-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Season" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RivalsEvent" (
    "id" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "track" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "finished" BOOLEAN NOT NULL,

    CONSTRAINT "RivalsEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RivalsResult" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "piRating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RivalsResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WheelToWheelEvent" (
    "id" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "track" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "finished" BOOLEAN NOT NULL,

    CONSTRAINT "WheelToWheelEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WheelToWheelResult" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "totalRaceTime" TEXT NOT NULL,
    "fastestLapTime" TEXT NOT NULL,
    "fastestQualifyingTime" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WheelToWheelResult_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RivalsEvent" ADD CONSTRAINT "RivalsEvent_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RivalsResult" ADD CONSTRAINT "RivalsResult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RivalsResult" ADD CONSTRAINT "RivalsResult_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "RivalsEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelToWheelEvent" ADD CONSTRAINT "WheelToWheelEvent_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelToWheelResult" ADD CONSTRAINT "WheelToWheelResult_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "WheelToWheelEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WheelToWheelResult" ADD CONSTRAINT "WheelToWheelResult_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
