/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Driver } from "./Driver";
import { DriverCountArgs } from "./DriverCountArgs";
import { DriverFindManyArgs } from "./DriverFindManyArgs";
import { DriverFindUniqueArgs } from "./DriverFindUniqueArgs";
import { CreateDriverArgs } from "./CreateDriverArgs";
import { UpdateDriverArgs } from "./UpdateDriverArgs";
import { DeleteDriverArgs } from "./DeleteDriverArgs";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { DriverService } from "../driver.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Driver)
export class DriverResolverBase {
  constructor(
    protected readonly service: DriverService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "read",
    possession: "any",
  })
  async _driversMeta(
    @graphql.Args() args: DriverCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Driver])
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "read",
    possession: "any",
  })
  async drivers(@graphql.Args() args: DriverFindManyArgs): Promise<Driver[]> {
    return this.service.drivers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Driver, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "read",
    possession: "own",
  })
  async driver(
    @graphql.Args() args: DriverFindUniqueArgs
  ): Promise<Driver | null> {
    const result = await this.service.driver(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Driver)
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "create",
    possession: "any",
  })
  async createDriver(@graphql.Args() args: CreateDriverArgs): Promise<Driver> {
    return await this.service.createDriver({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Driver)
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async updateDriver(
    @graphql.Args() args: UpdateDriverArgs
  ): Promise<Driver | null> {
    try {
      return await this.service.updateDriver({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Driver)
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "delete",
    possession: "any",
  })
  async deleteDriver(
    @graphql.Args() args: DeleteDriverArgs
  ): Promise<Driver | null> {
    try {
      return await this.service.deleteDriver(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Booking], { name: "bookings" })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findBookings(
    @graphql.Parent() parent: Driver,
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    const results = await this.service.findBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Review], { name: "reviews" })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @graphql.Parent() parent: Driver,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
