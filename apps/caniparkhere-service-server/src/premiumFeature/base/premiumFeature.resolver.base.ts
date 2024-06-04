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
import { PremiumFeature } from "./PremiumFeature";
import { PremiumFeatureCountArgs } from "./PremiumFeatureCountArgs";
import { PremiumFeatureFindManyArgs } from "./PremiumFeatureFindManyArgs";
import { PremiumFeatureFindUniqueArgs } from "./PremiumFeatureFindUniqueArgs";
import { CreatePremiumFeatureArgs } from "./CreatePremiumFeatureArgs";
import { UpdatePremiumFeatureArgs } from "./UpdatePremiumFeatureArgs";
import { DeletePremiumFeatureArgs } from "./DeletePremiumFeatureArgs";
import { PremiumFeatureService } from "../premiumFeature.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PremiumFeature)
export class PremiumFeatureResolverBase {
  constructor(
    protected readonly service: PremiumFeatureService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PremiumFeature",
    action: "read",
    possession: "any",
  })
  async _premiumFeaturesMeta(
    @graphql.Args() args: PremiumFeatureCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PremiumFeature])
  @nestAccessControl.UseRoles({
    resource: "PremiumFeature",
    action: "read",
    possession: "any",
  })
  async premiumFeatures(
    @graphql.Args() args: PremiumFeatureFindManyArgs
  ): Promise<PremiumFeature[]> {
    return this.service.premiumFeatures(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PremiumFeature, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PremiumFeature",
    action: "read",
    possession: "own",
  })
  async premiumFeature(
    @graphql.Args() args: PremiumFeatureFindUniqueArgs
  ): Promise<PremiumFeature | null> {
    const result = await this.service.premiumFeature(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PremiumFeature)
  @nestAccessControl.UseRoles({
    resource: "PremiumFeature",
    action: "create",
    possession: "any",
  })
  async createPremiumFeature(
    @graphql.Args() args: CreatePremiumFeatureArgs
  ): Promise<PremiumFeature> {
    return await this.service.createPremiumFeature({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PremiumFeature)
  @nestAccessControl.UseRoles({
    resource: "PremiumFeature",
    action: "update",
    possession: "any",
  })
  async updatePremiumFeature(
    @graphql.Args() args: UpdatePremiumFeatureArgs
  ): Promise<PremiumFeature | null> {
    try {
      return await this.service.updatePremiumFeature({
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

  @graphql.Mutation(() => PremiumFeature)
  @nestAccessControl.UseRoles({
    resource: "PremiumFeature",
    action: "delete",
    possession: "any",
  })
  async deletePremiumFeature(
    @graphql.Args() args: DeletePremiumFeatureArgs
  ): Promise<PremiumFeature | null> {
    try {
      return await this.service.deletePremiumFeature(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
