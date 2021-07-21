import React from "react";
import IncludeProps from "../../../utils/ViewDispatcher/IncludeProps";
import { CMProduct } from "../../../queries/fragments/__generated__/CMProduct";
import LeftRightBanner from "../LeftRightBanner";
import { Banner } from "../../../models/Banner/Banner";
import { initializeCMProduct } from "../../../models/Banner/CMProduct";

const CMProductAsLeftRightBanner: React.FC<IncludeProps<CMProduct>> = ({ self }) => {
  const banner: Banner = initializeCMProduct(self);
  return <LeftRightBanner banner={banner} />;
};

export default CMProductAsLeftRightBanner;
