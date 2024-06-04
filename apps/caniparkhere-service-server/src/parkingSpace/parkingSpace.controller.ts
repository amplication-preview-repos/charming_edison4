import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParkingSpaceService } from "./parkingSpace.service";
import { ParkingSpaceControllerBase } from "./base/parkingSpace.controller.base";

@swagger.ApiTags("parkingSpaces")
@common.Controller("parkingSpaces")
export class ParkingSpaceController extends ParkingSpaceControllerBase {
  constructor(
    protected readonly service: ParkingSpaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
