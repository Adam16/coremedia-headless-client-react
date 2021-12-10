import React from "react";
import IncludeProps from "../../../utils/ViewDispatcher/IncludeProps";
import { CMHTMLFragment as CMHTMLType } from "../../../queries/fragments/__generated__/CMHTMLFragment";
import CMHTML from "../../CMHTML/CMHTML";

const CMHTMLAsItem: React.FC<IncludeProps<CMHTMLType>> = ({ self }) => {
  return <CMHTML self={self} />;
};

export default CMHTMLAsItem;
