import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PremiumFeatureService } from "./premiumFeature.service";
import { PremiumFeatureControllerBase } from "./base/premiumFeature.controller.base";

@swagger.ApiTags("premiumFeatures")
@common.Controller("premiumFeatures")
export class PremiumFeatureController extends PremiumFeatureControllerBase {
  constructor(
    protected readonly service: PremiumFeatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
