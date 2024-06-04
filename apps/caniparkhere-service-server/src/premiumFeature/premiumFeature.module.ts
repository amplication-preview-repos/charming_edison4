import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PremiumFeatureModuleBase } from "./base/premiumFeature.module.base";
import { PremiumFeatureService } from "./premiumFeature.service";
import { PremiumFeatureController } from "./premiumFeature.controller";
import { PremiumFeatureResolver } from "./premiumFeature.resolver";

@Module({
  imports: [PremiumFeatureModuleBase, forwardRef(() => AuthModule)],
  controllers: [PremiumFeatureController],
  providers: [PremiumFeatureService, PremiumFeatureResolver],
  exports: [PremiumFeatureService],
})
export class PremiumFeatureModule {}
