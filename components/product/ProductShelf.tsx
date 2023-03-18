import type { LoaderReturnType } from "$live/types.ts";
import ProductCard from "$store/components/product/ProductCard.tsx";
import Container from "$store/components/ui/Container.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Text from "$store/components/ui/Text.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  title: string;
  products: LoaderReturnType<Product[]>;
}

function ProductShelf({ title, products }: Props) {
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
    <Container class="flex flex-col items-center gap-10 py-10">
      {title && (
        <h2>
          <Text variant="heading-2">{title}</Text>
        </h2>
      )}
      <Slider class="gap-6">
        {products?.map((product, index) => {
          const ml = index === 0 ? "ml-6 sm:ml-0" : "";
          const mr = index === products.length - 1 ? "mr-6 sm:mr-0" : "";

          return (
            <div
              class={`min-w-[220px] max-w-[220px] sm:min-w-[287px] sm:max-w-[287px] ${ml} ${mr}`}
            >
              <ProductCard key={index} product={product} />
            </div>
          );
        })}
      </Slider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </Container>
  );
}

export default ProductShelf;
