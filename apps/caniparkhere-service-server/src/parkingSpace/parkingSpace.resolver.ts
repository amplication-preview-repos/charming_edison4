import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParkingSpaceResolverBase } from "./base/parkingSpace.resolver.base";
import { ParkingSpace } from "./base/ParkingSpace";
import { ParkingSpaceService } from "./parkingSpace.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParkingSpace)
export class ParkingSpaceResolver extends ParkingSpaceResolverBase {
  constructor(
    protected readonly service: ParkingSpaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
