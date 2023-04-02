import { useState } from "preact/hooks";
import type { LoaderReturnType } from "$live/types.ts";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Container from "$store/components/ui/Container.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import Text from "$store/components/ui/Text.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import ShippingSimulation from "$store/islands/ShippingSimulation.tsx";
import NotFound from "$store/components/search/NotFound.tsx";
import ContainerFull from "$store/components/ui/ContainerFull.tsx";
import ProductDetailsBrand from "$store/components/product/ProductDetailsBrand.tsx";
import ProductDetailsSpecification from "$store/components/product/ProductDetailsSpecification.tsx";
import ProductSelector from "$store/components/product/ProductVariantSelector.tsx";

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
    brand,
    name,
  } = product;

  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front] = images ?? [];

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

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
            {[front].map((img, index) => (
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
            {
              /* {[front, back ?? front].map((img, index) => (
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
              ))} */
            }
          </div>
          {/* Product Info */}
          <div class="flex-auto px-4 sm:px-0">
            <div class="flex flex-col mt-4 sm:mt-8">
              <h1>
                <Text variant="heading-3">{name}</Text>
              </h1>

              <ProductDetailsSpecification
                specificationName="Autor"
                product={product}
              />

              <ProductDetailsBrand product={product} />
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
            <>
              {seller && (
                <div class="mt-4 sm:mt-10 flex flex-row gap-0 max-w-lg">
                  <div class="w-[15%]">
                    <QuantitySelector
                      onChange={handleQuantityChange}
                      quantity={quantity}
                      disabled={false}
                      loading={false}
                    />
                  </div>
                  <div class="w-[85%]">
                    <AddToCartButton
                      skuId={productID}
                      sellerId={seller}
                      quantity={quantity}
                    />
                  </div>
                </div>
              )}
            </>
            {/* Shipping Simulation */}
            <div class="mt-8">
              <ShippingSimulation
                items={[{
                  id: Number(product.sku),
                  quantity: 1,
                  seller: seller ?? "1",
                }]}
              />
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
