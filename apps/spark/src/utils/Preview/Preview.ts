import { ZonedDateTime, DateTimeFormatter, convert } from "@js-joda/core";

const STUDIO_FORMAT: DateTimeFormatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm VV");

/**
 * Checks for preview mode based on `VITE_PREVIEW` or `mode` === "development"
 * @return boolean preview mode
 */
export const isPreview = (): boolean => {
  return import.meta.env.VITE_PREVIEW === "true" || import.meta.env.DEV;
};

/**
 * Extract the previewDate from URL path
 * @param queryParams the query params of "react-router-dom"
 * @return string preview date
 */
export const getPreviewDate = (queryParams: string): string | undefined => {
  const previewDate = new URLSearchParams(queryParams).get("previewDate");
  return (isPreview() && previewDate) || undefined;
};

/**
 * Formats the previewDate in the format required by the headless endpoint
 * @param previewDate the preview date
 * @return formatted preview date
 */
export const formatPreviewDate = (previewDate: string | undefined): string | undefined => {
  if (previewDate) {
    const zonedDateTime = ZonedDateTime.parse(previewDate, STUDIO_FORMAT);
    return convert(zonedDateTime).toDate().toUTCString();
  }
  return undefined;
};
