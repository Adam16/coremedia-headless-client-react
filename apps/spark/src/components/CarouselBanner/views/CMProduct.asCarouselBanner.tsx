import React from "react";
import IncludeProps from "../../../utils/ViewDispatcher/IncludeProps";
import { CMProduct } from "@coremedia-labs/graphql-layer";
import CarouselBanner from "../CarouselBanner";
import { Banner } from "../../../models/Banner/Banner";
import { initializeCMProduct } from "../../../models/Banner/CMProduct";

const CMProductAsPortraitBanner: React.FC<IncludeProps<CMProduct>> = ({ self }) => {
  const banner: Banner = initializeCMProduct(self);
  return <CarouselBanner banner={banner} />;
};

export default CMProductAsPortraitBanner;
