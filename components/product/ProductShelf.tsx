import type { LoaderReturnType } from "$live/types.ts";
import ProductCard from "$store/components/product/ProductCard.tsx";
import Arrows from "$store/components/ui/Arrows.tsx";
import Container from "$store/components/ui/Container.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { useEffect, useId, useState } from "preact/hooks";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
  viewMoreLink: string;
  viewMoreText: string;
}

function ProductShelf({ title, products, viewMoreLink, viewMoreText }: Props) {
  const id = useId();

  if (!products || products.length === 0) {
    return null;
  }

  const [jsonLd, setJsonLd] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const productList = products.map((product) => ({
        "@type": "Product",
        "@id": product.url,
        name: product.name,
        description: product.description,
        url: product.url,
        image: product.image,
        sku: product.sku,
        offers: {
          "@type": "Offer",
          price: product.offers?.lowPrice,
          priceCurrency: product.offers?.priceCurrency,
          availability: product.offers?.offers[0].availability,
        },
      }));

      const shelfJsonLd = {
        "@context": "https://schema.org",
        "@graph": productList,
      };

      console.log("shelfJsonLd", shelfJsonLd);

      setJsonLd(JSON.stringify(shelfJsonLd));
    }
  }, [products]);

  return (
    <Container
      id={id}
      class="py-10 px-0 sm:px-5"
    >
      {title && (
        <h2 class="text-center row-start-1 col-span-full">
          <Text variant="heading-2">{title}</Text>
        </h2>
      )}
      {viewMoreLink && (
        <a
          class="block row-start-1 col-span-full text-center"
          href={viewMoreLink}
        >
          <Text variant="heading-3">{viewMoreText ? viewMoreText : null}</Text>
        </a>
      )}

      <Slider
        class="col-span-full row-span-full scrollbar-none gap-6"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {products?.map((product) => (
          <div class="min-w-[270px] max-w-[270px] sm:min-w-[292px] sm:max-w-[292px]">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>

      <Arrows />

      <SliderControllerJS rootId={id} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </Container>
  );
}

export default ProductShelf;
