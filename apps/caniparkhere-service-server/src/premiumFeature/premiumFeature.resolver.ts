import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PremiumFeatureResolverBase } from "./base/premiumFeature.resolver.base";
import { PremiumFeature } from "./base/PremiumFeature";
import { PremiumFeatureService } from "./premiumFeature.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PremiumFeature)
export class PremiumFeatureResolver extends PremiumFeatureResolverBase {
  constructor(
    protected readonly service: PremiumFeatureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
