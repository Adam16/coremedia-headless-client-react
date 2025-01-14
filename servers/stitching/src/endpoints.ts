export const coreMediaHeadlessServerEndpoint = () => {
  let coreMediaEndpoint = process.env.COREMEDIA_ENDPOINT || "";

  // use local headless server as fallback in development
  if (!coreMediaEndpoint && process.env.NODE_ENV !== "production") {
    coreMediaEndpoint = "http://localhost:41180/graphql";
  }

  // check for missing graphql
  if (!coreMediaEndpoint.endsWith("/graphql")) {
    coreMediaEndpoint = `${coreMediaEndpoint}/graphql`;
  }
  return coreMediaEndpoint;
};

export const commerceCatalogEndpoint = () => {
  let catalogEndpoint = process.env.CATALOG_ENDPOINT || "";

  // use local headless server as default in development
  if (!catalogEndpoint && process.env.NODE_ENV !== "production") {
    catalogEndpoint = "http://localhost:5000/graphql";
  }

  // check for missing graphql
  if (!catalogEndpoint.endsWith("/graphql")) {
    catalogEndpoint = `${catalogEndpoint}/graphql`;
  }
  return catalogEndpoint;
};

export const proxyEndpoint = () => {
  return coreMediaHeadlessServerEndpoint().replace("/graphql", "");
};
