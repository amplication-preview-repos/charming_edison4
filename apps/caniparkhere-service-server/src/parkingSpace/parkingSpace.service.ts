import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParkingSpaceServiceBase } from "./base/parkingSpace.service.base";

@Injectable()
export class ParkingSpaceService extends ParkingSpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
