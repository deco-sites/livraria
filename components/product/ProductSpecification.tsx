import Container from "$store/components/ui/Container.tsx";
import { LoaderReturnType } from "https://denopkg.com/deco-cx/live@0.10.3/types.ts";
import Text from "$store/components/ui/Text.tsx";
import { ProductDetailsPage } from "https://denopkg.com/deco-sites/std@0.1.4/commerce/types.ts";
import { ProductDetailsPage as MZProductDetailsPage } from "$store/commerce/vtex/types.ts";

export interface Props {
  /**
   * @title Nome da Especificação
   */
  specificationName?: string;
  page: LoaderReturnType<ProductDetailsPage | null>;
}
export interface ProductSpecificationProps {
  specificationName?: string;
  page: MZProductDetailsPage;
}

function ProductSpec(
  { specificationName, page }: ProductSpecificationProps,
) {
  if (!specificationName || !specificationName?.length) {
    return <></>;
  }

  const {
    product,
  } = page;

  const specifications = product?.productSpecifications;

  if (!specifications || !specifications?.length) {
    return <></>;
  }

  const specification =
    (specifications?.filter((spec) => spec?.name === specificationName) || [])
      ?.pop();

  if (!specification) {
    return <></>;
  }

  return (
    <Container class="py-0 sm:py-10 sm:mb-10 bg-white rounded-[0.25rem] p-8 shadow-section">
      <h2 class="text-center row-start-1 col-span-full mb-4">
        <Text variant="heading-4" tone="product-title">
          {specification?.name}
        </Text>
      </h2>

      <p class="text-justify row-start-1 col-span-full mb-4">
        <Text variant="caption" tone="product-text">
          {specification?.value}
        </Text>
      </p>
    </Container>
  );
}

function ProductSpecification({ page, specificationName }: Props) {
  if (page) {
    return <ProductSpec page={page} specificationName={specificationName} />;
  }
  return <></>;
}

export default ProductSpecification;
