import type { LoaderReturnType } from "$live/types.ts";
import ProductCard from "$store/components/product/ProductCard.tsx";
import Button from "$store/components/ui/Button.tsx";
import Container from "$store/components/ui/Container.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Filters from "$store/components/search/Filters.tsx";
import NotFound from "$store/components/search/NotFound.tsx";
import Sort from "$store/components/search/Sort.tsx";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { ProductListingPage as MZProductListingPage } from "$store/commerce/vtex/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
  /**
   * @title Mostrar a barra lateral de filtros?
   * @default true
   */
  showFilters?: boolean;
}

function Gallery(
  { page, showFilters = true }: {
    page: MZProductListingPage;
    showFilters?: boolean;
  },
) {
  const filters = page?.filters;
  const totalProducts = page?.products?.length;

  return (
    <Container class="px-4 sm:py-10 sm:mb-10">
      <div
        class={`flex justify-between items-start ${
          showFilters ? "sm:grid grid-cols-[18%_82%]" : ""
        }`}
      >
        {showFilters &&
          (
            <aside class="hidden sm:flex flex-col items-center">
              <Filters filters={filters} />
            </aside>
          )}

        <div class="flex flex-col">
          <div class="hidden sm:flex flex-row justify-between items-center sm:p-0 mb-2">
            <Text>Foram encontrados {totalProducts}</Text>
            <div>
              Ordenar por: <Sort />
            </div>
          </div>

          <div class="relative grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-10 items-center">
            {page.products?.map((product, index) => (
              <div class="w-full list-none" key={product.productID}>
                <ProductCard
                  product={product}
                  preload={index === 0}
                  key={product.productID}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="flex flex-row items-center justify-center gap-2 my-4">
        <a rel="prev" href={page.pageInfo.previousPage ?? "#"}>
          <Button disabled={!page.pageInfo.previousPage} variant="icon">
            <Icon id="ChevronLeft" width={20} height={20} strokeWidth={2} />
          </Button>
        </a>
        <Text variant="caption">
          {page.pageInfo.currentPage + 1}
        </Text>
        <a rel="next" href={page.pageInfo.nextPage ?? "#"}>
          <Button disabled={!page.pageInfo.nextPage} variant="icon">
            <Icon id="ChevronRight" width={20} height={20} strokeWidth={2} />
          </Button>
        </a>
      </div>
    </Container>
  );
}

function ProductGallery({ page }: Props) {
  if (!page || !page?.products || !page?.products?.length) {
    return <NotFound />;
  }

  return <Gallery page={page} />;
}

export default ProductGallery;
