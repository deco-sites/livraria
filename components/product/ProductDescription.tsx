import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import { LoaderReturnType } from "https://denopkg.com/deco-cx/live@0.10.3/types.ts";
import { ProductDetailsPage } from "https://denopkg.com/deco-sites/std@0.1.4/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}
function Description({ page }: { page: ProductDetailsPage }) {
  const {
    product,
  } = page;
  const {
    description,
  } = product;
  return (
    <Container class="py-0 sm:py-10 sm:mb-10 bg-white rounded-[0.25rem] p-8 shadow-section">
      {/* Description card */}
      <div class="mt-4 sm:mt-6">
        <Text variant="caption">
          {description && (
            <details>
              <summary class="cursor-pointer">Descrição</summary>
              <div class="ml-2 mt-2">{description}</div>
            </details>
          )}
        </Text>
      </div>
    </Container>
  );
}

function ProductDescription({ page }: Props) {
  // console.log("page IN PST", page);
  if (page) {
    return <Description page={page} />;
  }
  return <></>;
}

export default ProductDescription;
