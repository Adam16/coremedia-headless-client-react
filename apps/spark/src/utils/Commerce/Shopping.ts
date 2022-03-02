import { ProductTeaser } from "@coremedia-labs/graphql-layer";
import { ExternalProduct } from "@coremedia-labs/graphql-layer";

/**
 *
 * @param productTeaser
 */
export const isShopNowEnabled = (productTeaser: ProductTeaser | ExternalProduct): boolean => {
  if (productTeaser.shopNowSetting) {
    const showNowSetting: { shopNow: string } = productTeaser.shopNowSetting;
    if (showNowSetting.shopNow) {
      if (showNowSetting.shopNow === "enabled") {
        return true;
      } else if (showNowSetting.shopNow === "disabled") {
        return false;
      }
    }
  }
  return true;
};
