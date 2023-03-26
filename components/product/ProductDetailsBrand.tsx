import Text from "$store/components/ui/Text.tsx";
import { Product } from "$store/commerce/vtex/types.ts";

export interface Props {
  label?: string;
  product: Product;
}

function ProductDetailsBrand(
  { label = "Editora", product }: Props,
) {
  if (!product || !label || !label?.length) {
    return <></>;
  }

  const brandName = product?.brand;

  if (!brandName || !brandName?.length) {
    return <></>;
  }

  return (
    <Text tone="subdued" variant="caption">
      <span>{label}:</span> <a href={`/s?q=${brandName}`}>{brandName}</a>
    </Text>
  );
}

export default ProductDetailsBrand;
