// deno-lint-ignore-file no-explicit-any
import {
  Item,
  LegacyItem,
  PriceRange,
  SkuSpecification,
  SpecificationGroup,
} from "deco-sites/std/commerce/vtex/types.ts";

import {
  AggregateOffer,
  AggregateRating,
  BreadcrumbList,
  ProductGroup,
  PropertyValue,
  Review,
  Thing,
} from "deco-sites/std/commerce/types.ts";

export interface Product extends Omit<Thing, "@type"> {
  "@type": "Product";
  /**
   * A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
   *
   * Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   */
  additionalProperty?: PropertyValue[];
  /** The overall rating, based on a collection of reviews or ratings, of the item. */
  aggregateRating?: AggregateRating;
  /** An award won by or for this item. */
  award?: string;
  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person. */
  brand?: string;
  /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy. */
  category?: string;
  /** A Global Trade Item Number ({@link https://www.gs1.org/standards/id-keys/gtin GTIN}). GTINs identify trade items, including products and services, using numeric identification codes. The {@link https://schema.org/gtin gtin} property generalizes the earlier {@link https://schema.org/gtin8 gtin8}, {@link https://schema.org/gtin12 gtin12}, {@link https://schema.org/gtin13 gtin13}, and {@link https://schema.org/gtin14 gtin14} properties. The GS1 {@link https://www.gs1.org/standards/Digital-Link/ digital link specifications} express GTINs as URLs. A correct {@link https://schema.org/gtin gtin} value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a {@link https://www.gs1.org/services/check-digit-calculator valid GS1 check digit} and meet the other rules for valid GTINs. See also {@link http://www.gs1.org/barcodes/technical/idkeys/gtin GS1's GTIN Summary} and {@link https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged. */
  gtin?: string;
  /** Indicates the {@link https://schema.org/productGroupID productGroupID} for a {@link https://schema.org/ProductGroup ProductGroup} that this product {@link https://schema.org/isVariantOf isVariantOf}. */
  inProductGroupWithID?: string;
  // TODO: Make json schema generator support self-referencing types
  // /** A pointer to another, somehow related product (or multiple products). */
  // isRelatedTo?: Product[];
  // /** A pointer to another, functionally similar product (or multiple products). */
  // isSimilarTo?: Product[];
  /** Indicates the kind of product that this is a variant of. In the case of {@link https://schema.org/ProductModel ProductModel}, this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a {@link https://schema.org/ProductGroup ProductGroup}, the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with {@link https://schema.org/ProductGroup ProductGroup}, this property can apply to any {@link https://schema.org/Product Product} included in the group. */
  isVariantOf?: ProductGroup;
  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link https://schema.org/businessFunction businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link https://schema.org/Demand Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. */
  offers?: AggregateOffer;
  /** The product identifier, such as ISBN. For example: `meta itemprop="productID" content="isbn:123-456-789"`. */
  productID: string;
  /** The date of production of the item, e.g. vehicle. */
  productionDate?: string;
  /** The release date of a product or product model. This can be used to distinguish the exact variant of a product. */
  releaseDate?: string;
  /** A review of the item. */
  review?: Review;
  /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers. */
  sku: string;
  /** Product Specifications */
  productSpecifications?: {
    name?: string;
    value?: any;
  }[];
}

interface IProduct {
  productId: string;
  productName: string;
  brand: string;
  brandId: number;
  cacheId?: string;
  linkText: string;
  productReference: string;
  categoryId: string;
  clusterHighlights: Record<string, unknown>;
  productClusters: Record<string, string>;
  categories: string[];
  categoriesIds: string[];
  link: string;
  description: string;
  /**
   * @description Product SKUs.
   */
  items: Item[];
  skuSpecifications?: SkuSpecification[];
  priceRange: PriceRange;
  specificationGroups: SpecificationGroup[];
  properties: Array<{ name: string; values: string[] }>;
  selectedProperties: Array<{ key: string; value: string }>;
  releaseDate: string;
}

export type LegacyProductVTEX = IProduct & {
  items: LegacyItem[];
  origin?: string;
  allSpecifications?: string[];
  [key: string]: any;
};

export interface ProductDetailsPage {
  breadcrumbList: BreadcrumbList;
  product: Product;
}
