import React from "react";
import IncludeProps from "../../../utils/ViewDispatcher/IncludeProps";
import { Teasable } from "../../../queries/fragments/__generated__/Teasable";
import SquareBanner from "../SquareBanner";
import { Banner, initializeBanner } from "../../../models/Banner/Banner";

const CMTeasableAsSquareBanner: React.FC<IncludeProps<Teasable>> = ({ self }) => {
  const banner: Banner = initializeBanner(self);
  return <SquareBanner banner={banner} />;
};

export default CMTeasableAsSquareBanner;
