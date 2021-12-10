import React from "react";
import IncludeProps from "../../utils/ViewDispatcher/IncludeProps";
import { CMHTMLFragment as CMHTMLType } from "../../queries/fragments/__generated__/CMHTMLFragment";

const CMHTML: React.FC<IncludeProps<CMHTMLType>> = ({ self }) => {
  return <div dangerouslySetInnerHTML={{ __html: self.html || "" }} />;
};

export default CMHTML;
