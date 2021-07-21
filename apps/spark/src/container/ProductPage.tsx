import React, { FC } from "react";
import { match } from "react-router";
import ProductBySeoSegmentQuery from "../queries/ProductBySeoSegmentQuery";
import Loading from "../components/Loading/Loading";
import { ApolloClientAlert, ProductNotFoundAlert } from "../components/Error/Alert";
import DetailedProduct from "../components/Product/DetailedProduct";
import { DetailProduct } from "../models/Detail/DetailProduct";
import { initializeGrid } from "../models/Grid/Grid";
import ProductByIdQuery from "../queries/ProductByIdQuery";
import { getGlobalState } from "../utils/App/GlobalState";
import { initializePicture, Picture } from "../models/Banner/Picture";
import SeoHeader from "../components/Header/SeoHeader";
import RootPreviewId from "../components/FragmentPreview/RootPreviewId";
import { initializeProductBannerFromProduct } from "../models/Banner/ProductBanner";

interface PageProps {
  match: match<RouteProps>;
}

interface RouteProps {
  catalogPath: string;
  seoSegment: string;
}

const ProductPage: FC<PageProps> = ({ match }) => {
  let product = null;
  const { useSeo, siteId } = getGlobalState();
  if (useSeo) {
    const { data, loading, error } = ProductBySeoSegmentQuery(match.params.seoSegment, siteId);
    if (loading) return <Loading />;
    if (error) return <ApolloClientAlert error={error} />;
    if (!data || !data.productBySeoSegment) {
      return <ProductNotFoundAlert />;
    }
    product = data.productBySeoSegment;
  } else {
    const { data, loading, error } = ProductByIdQuery(match.params.seoSegment, siteId);
    if (loading) return <Loading />;
    if (error) return <ApolloClientAlert error={error} />;
    if (!data || !data.product) {
      return <ProductNotFoundAlert />;
    }
    product = data.product;
  }

  if (!product) {
    return <ProductNotFoundAlert />;
  }

  let media: Array<Picture> = [];
  const imageUrl = product.defaultImageUrl || product.thumbnailUrl;
  if (imageUrl) {
    media = [{ uriTemplate: imageUrl, title: product.name, alt: product.name, data: null }];
  }
  if (product.augmentation && product.augmentation.pictures && product.augmentation.pictures.length > 0) {
    media = product.augmentation?.pictures.map((item: any) => {
      return initializePicture(item);
    });
  }

  const detailProduct: DetailProduct = {
    ...initializeProductBannerFromProduct(product),
    name: product.name,
    shortDescription: product.shortDescription,
    longDescription: product.longDescription,
    shopNowConfiguration: true,
    pictures: media,
    grid: product.augmentation && initializeGrid(product.augmentation.grid),
  };

  return (
    <>
      <SeoHeader title={detailProduct.name} />
      <RootPreviewId metadataRoot={detailProduct.metadata?.root} />
      <DetailedProduct {...detailProduct} />
    </>
  );
};

export default ProductPage;
