import { CmLinkableFragment, CmDownloadFragment, CmExternalLinkFragment } from "@coremedia-labs/graphql-layer";
import { LinkAttributes } from "../../components/Link/Link";
import { getLink } from "./LinkUtils";

describe("linkutil", () => {
  it("getLink for teasable", () => {
    const teaser: CmLinkableFragment = {
      __typename: "CMArticleImpl",
      id: "1234",
      title: "Title",
      segment: "Segment",
      navigationPath: [
        { __typename: "CMChannelImpl", segment: "Root Segment", id: "Root id", title: "Root" },
        { __typename: "CMChannelImpl", segment: "Parent Segment", id: "Parent id", title: "Parent" },
        { __typename: "CMArticleImpl", segment: "Segment", id: "1234", title: "Title" },
      ],
    };
    const expectedResult: LinkAttributes = {
      externalLink: false,
      linkTarget: "/root-segment/parent-segment/segment-1234",
      openInNewTab: false,
    };
    const resultUrl = getLink(teaser, "root-segment");
    expect(resultUrl).toEqual(expectedResult);
  });

  it("getLink for channel", () => {
    const channel: CmLinkableFragment = {
      __typename: "CMChannelImpl",
      id: "1234",
      title: "Title",
      segment: "Segment",
      navigationPath: [
        { __typename: "CMChannelImpl", segment: "Root Segment", id: "Root id", title: "Root" },
        { __typename: "CMChannelImpl", segment: "Parent Segment", id: "Parent id", title: "Parent" },
        { __typename: "CMChannelImpl", segment: "Segment", id: "1234", title: "Title" },
      ],
    };
    const expectedResult: LinkAttributes = {
      externalLink: false,
      linkTarget: "/root-segment/parent-segment/segment/",
      openInNewTab: false,
    };
    const resultUrl = getLink(channel, "root-segment");
    expect(resultUrl).toEqual(expectedResult);
  });

  it("getLink for download", () => {
    const download: CmDownloadFragment = {
      __typename: "CMDownloadImpl",
      id: "1234",
      title: "Title",
      segment: "Segment",
      picture: null,
      teaserText: null,
      teaserTitle: null,
      teaserOverlaySettings: null,
      authors: null,
      extDisplayedDate: null,
      modificationDate: "",
      media: null,
      teaserTargets: null,
      data: { uri: "/my/download/uri", __typename: "Blob" },
      navigationPath: [
        { __typename: "CMChannelImpl", segment: "Root Segment", id: "Root id", title: "Root" },
        { __typename: "CMChannelImpl", segment: "Parent Segment", id: "Parent id", title: "Parent" },
        { __typename: "CMDownloadImpl", segment: "Segment", id: "1234", title: "Title" },
      ],
      subjectTaxonomy: null,
    };
    const expectedResult: LinkAttributes = {
      externalLink: true,
      linkTarget: "/my/download/uri",
      openInNewTab: true,
    };
    const resultUrl = getLink(download, "root-segment");
    expect(resultUrl).toEqual(expectedResult);
  });

  it("getLink for external link", () => {
    const download: CmExternalLinkFragment = {
      __typename: "CMExternalLinkImpl",
      id: "1234",
      title: "Title",
      segment: "Segment",
      picture: null,
      teaserText: null,
      teaserTitle: null,
      media: null,
      teaserOverlaySettings: null,
      authors: null,
      extDisplayedDate: null,
      modificationDate: "",
      teaserTargets: null,
      url: "www.coremedia.com",
      openInNewTab: true,
      navigationPath: [
        { __typename: "CMChannelImpl", segment: "Root Segment", id: "Root id", title: "Root" },
        { __typename: "CMChannelImpl", segment: "Parent Segment", id: "Parent id", title: "Parent" },
        { __typename: "CMDownloadImpl", segment: "Segment", id: "1234", title: "Title" },
      ],
      subjectTaxonomy: null,
    };
    const expectedResult: LinkAttributes = {
      externalLink: true,
      linkTarget: "www.coremedia.com",
      openInNewTab: true,
    };
    const resultUrl = getLink(download, "root-segment");
    expect(resultUrl).toEqual(expectedResult);
  });
});
