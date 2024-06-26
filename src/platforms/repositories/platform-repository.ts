import { Prisma, Platform } from "@prisma/client";

export interface PlatformRepository{
  create(data: Prisma.PlatformUncheckedCreateInput): Promise<Platform>;
  findPlatformByID(id: string) : Promise<Platform | null>;
}