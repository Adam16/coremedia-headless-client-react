import React from "react";
import IncludeProps from "../../../utils/ViewDispatcher/IncludeProps";
import { Product } from "../../../queries/fragments/__generated__/Product";
import { initializeProductBannerFromProduct, ProductBanner } from "../../../models/Banner/ProductBanner";
import SquareProductBanner from "../SquareProductBanner";

const ProductAsSquareBanner: React.FC<IncludeProps<Product>> = ({ self }) => {
  const banner: ProductBanner = initializeProductBannerFromProduct(self);
  return <SquareProductBanner banner={banner} />;
};

export default ProductAsSquareBanner;
