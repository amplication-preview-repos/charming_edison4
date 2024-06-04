import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PremiumFeatureServiceBase } from "./base/premiumFeature.service.base";

@Injectable()
export class PremiumFeatureService extends PremiumFeatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
