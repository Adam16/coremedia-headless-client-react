import React from "react";
import { Redirect } from "react-router-dom";
import IncludeProps from "../../../utils/ViewDispatcher/IncludeProps";
import { Linkable } from "@coremedia-labs/graphql-layer";
import { getLink } from "../../../utils/Link/LinkUtils";
import { usePreviewContextState } from "../../../context/PreviewContextProvider";
import { isPreview } from "../../../utils/Preview/Preview";

const CMChannel: React.FC<IncludeProps<Linkable>> = ({ self }) => {
  const { previewDate } = usePreviewContextState();

  let params = {};
  if (isPreview() && previewDate) {
    params = {
      previewDate: previewDate,
    };
  }
  return <Redirect to={getLink(self, params).linkTarget || ""} />;
};

export default CMChannel;
