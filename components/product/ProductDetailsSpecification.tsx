import Text from "$store/components/ui/Text.tsx";
import { Product } from "$store/commerce/vtex/types.ts";

export interface Props {
  specificationName?: string;
  product: Product;
}

function ProductDetailsSpecification(
  { specificationName, product }: Props,
) {
  if (!product || !specificationName || !specificationName?.length) {
    return <></>;
  }

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
    <Text tone="subdued" variant="caption">
      <span>{specification?.name}:</span>{" "}
      <a href={`/s?q=${specification?.value}`}>{specification?.value}</a>
    </Text>
  );
}

export default ProductDetailsSpecification;
