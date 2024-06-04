/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsInt } from "class-validator";
import { DriverWhereUniqueInput } from "../../driver/base/DriverWhereUniqueInput";
import { Type } from "class-transformer";
import { ParkingSpaceWhereUniqueInput } from "../../parkingSpace/base/ParkingSpaceWhereUniqueInput";

@InputType()
class ReviewUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment?: string | null;

  @ApiProperty({
    required: false,
    type: () => DriverWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DriverWhereUniqueInput)
  @IsOptional()
  @Field(() => DriverWhereUniqueInput, {
    nullable: true,
  })
  driver?: DriverWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ParkingSpaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParkingSpaceWhereUniqueInput)
  @IsOptional()
  @Field(() => ParkingSpaceWhereUniqueInput, {
    nullable: true,
  })
  parkingSpace?: ParkingSpaceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number | null;
}

export { ReviewUpdateInput as ReviewUpdateInput };
