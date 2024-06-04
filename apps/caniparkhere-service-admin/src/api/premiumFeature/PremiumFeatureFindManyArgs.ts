import { PremiumFeatureWhereInput } from "./PremiumFeatureWhereInput";
import { PremiumFeatureOrderByInput } from "./PremiumFeatureOrderByInput";

export type PremiumFeatureFindManyArgs = {
  where?: PremiumFeatureWhereInput;
  orderBy?: Array<PremiumFeatureOrderByInput>;
  skip?: number;
  take?: number;
};
