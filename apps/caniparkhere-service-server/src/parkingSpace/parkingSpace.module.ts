import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParkingSpaceModuleBase } from "./base/parkingSpace.module.base";
import { ParkingSpaceService } from "./parkingSpace.service";
import { ParkingSpaceController } from "./parkingSpace.controller";
import { ParkingSpaceResolver } from "./parkingSpace.resolver";

@Module({
  imports: [ParkingSpaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParkingSpaceController],
  providers: [ParkingSpaceService, ParkingSpaceResolver],
  exports: [ParkingSpaceService],
})
export class ParkingSpaceModule {}
