import type { LoaderReturnType } from "$live/types.ts";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Container from "$store/components/ui/Container.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

import NotFound from "../search/NotFound.tsx";
import ContainerFull from "../ui/ContainerFull.tsx";
import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];

  return (
    <ContainerFull class="p-0 m-0 ml-auto mr-auto">
      {/* Breadcrumb */}
      <Breadcrumb
        itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
      />
      {/* Product Details */}
      <Container class="py-0 sm:pb-10 sm:mb-10">
        {/* Code and name */}
        <div class="flex flex-col gap-4 sm:flex-row sm:gap-10 bg-white rounded-[0.25rem] p-8 shadow-section">
          {/* Image Gallery */}
          <div class="flex flex-row overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2">
            {[front, back ?? front].map((img, index) => (
              <Image
                style={{ aspectRatio: "290 / 420" }}
                class="snap-center min-w-[100vw] sm:min-w-0 sm:w-auto sm:h-[420px]"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={img.url!}
                alt={img.alternateName}
                width={290}
                height={420}
                // Preload LCP image for better web vitals
                preload={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
          {/* Product Info */}
          <div class="flex-auto px-4 sm:px-0">
            <div class="mt-4 sm:mt-8">
              <div>
                <Text tone="subdued" variant="caption">
                  Cod. {gtin}
                </Text>
              </div>
              <h1>
                <Text variant="heading-3">{name}</Text>
              </h1>
            </div>
            {/* Prices */}
            <div class="mt-4">
              <div class="flex flex-row gap-2 items-center">
                <Text
                  class="line-through"
                  tone="subdued"
                  variant="list-price"
                >
                  {formatPrice(listPrice, offers!.priceCurrency!)}
                </Text>
                <Text tone="price" variant="heading-3">
                  {formatPrice(price, offers!.priceCurrency!)}
                </Text>
              </div>
              <Text tone="subdued" variant="caption">
                {installments}
              </Text>
            </div>
            {/* Sku Selector */}
            <div class="mt-4 sm:mt-6">
              <ProductSelector product={product} />
            </div>
            {/* Add to Cart and Favorites button */}
            <div class="mt-4 sm:mt-10 flex flex-col gap-2">
              {seller && (
                <AddToCartButton
                  skuId={productID}
                  sellerId={seller}
                />
              )}
              <Button variant="secondary">
                <Icon id="Heart" width={20} height={20} strokeWidth={2} />{" "}
                Favoritar
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </ContainerFull>
  );
}

function ProductDetails({ page }: Props) {
  // console.log("page IN DETAILS", page);
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
