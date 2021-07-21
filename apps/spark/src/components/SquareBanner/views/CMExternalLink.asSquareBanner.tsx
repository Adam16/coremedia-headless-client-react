import React from "react";
import IncludeProps from "../../../utils/ViewDispatcher/IncludeProps";
import { ExternalLink } from "../../../queries/fragments/__generated__/ExternalLink";
import SquareBanner from "../SquareBanner";
import { Banner } from "../../../models/Banner/Banner";
import { initializeExternalLink } from "../../../models/Banner/ExternalLink";

const CMExternalLinkAsSquareBanner: React.FC<IncludeProps<ExternalLink>> = ({ self }) => {
  const banner: Banner = initializeExternalLink(self);
  return <SquareBanner banner={banner} />;
};
export default CMExternalLinkAsSquareBanner;
