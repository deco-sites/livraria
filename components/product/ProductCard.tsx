/* import { ProductDetailsPage as MZProductDetailsPage } from "$store/commerce/vtex/types.ts";
import ProductSpecification from "$store/components/product/ProductSpecification.tsx"; */
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import { formatPrice } from "$store/sdk/format.ts";
import { useOffer } from "$store/sdk/useOffer.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import ProductShelfSpecification from "$store/components/product/ProductShelfSpecification.tsx";
import ProductShelfBrand from "$store/components/product/ProductShelfBrand.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
/* import { LoaderReturnType } from "https://denopkg.com/deco-cx/live@0.10.3/types.ts"; */
/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */

function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-center items-center gap-2">
      {options.map(([url, value]) => (
        <a href={url}>
          <Avatar
            class="bg-default"
            variant="abbreviation"
            content={value}
            disabled={url === product.url}
          />
        </a>
      ))}
    </ul>
  );
}

export interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
  /*  page: LoaderReturnType<MZProductDetailsPage | null>; */
}

function ProductCard({ product, preload /* , page */ }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group max-w-[232px]"
    >
      <a
        href={url}
        aria-label="product link"
        class="w-[90%] p-[0.5rem] m-[0.5rem] sm:p-[1rem] sm:m-[1rem] bg-white rounded-[1rem] hover:shadow-section flex flex-col justify-between"
      >
        <div class="relative w-full">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={178}
            height={258}
            class="w-full group-hover:hidden"
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            /* sizes="(max-width: 640px) 50vw, 20vw" */
          />

          <Image
            src={back?.url ?? front.url!}
            alt={back?.alternateName ?? front.alternateName}
            width={178}
            height={258}
            class="w-full hidden group-hover:block"
            /* sizes="(max-width: 640px) 50vw, 20vw" */
          />

          {seller && (
            <div
              class="absolute bottom-0 hidden sm:group-hover:flex flex-col gap-2 w-full p-2"
              style={{
                backgroundColor: "primary",
              }}
            >
              <Sizes {...product} />
              <Button
                href={product.url}
                class="bg-primary text-default-inverse font-normal"
              >
                Comprar
              </Button>
            </div>
          )}
        </div>

        <div class="flex flex-col gap-1 py-2">
          <Text
            class="overflow-hidden overflow-ellipsis whitespace-nowrap"
            variant="caption"
          >
            {name}
          </Text>

          <ProductShelfSpecification
            specificationName="Autor"
            product={product}
          />

          <ProductShelfBrand product={product} />

          <div class="flex items-center gap-2">
            <Text
              class="line-through"
              variant="list-price"
              tone="subdued"
            >
              {formatPrice(listPrice, offers!.priceCurrency!)}
            </Text>

            <Text variant="caption" tone="price">
              {formatPrice(price, offers!.priceCurrency!)}
            </Text>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
