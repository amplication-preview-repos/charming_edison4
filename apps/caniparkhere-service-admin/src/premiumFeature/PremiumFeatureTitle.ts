import { PremiumFeature as TPremiumFeature } from "../api/premiumFeature/PremiumFeature";

export const PREMIUMFEATURE_TITLE_FIELD = "name";

export const PremiumFeatureTitle = (record: TPremiumFeature): string => {
  return record.name?.toString() || String(record.id);
};
