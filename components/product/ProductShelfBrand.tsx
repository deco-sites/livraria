import Text from "$store/components/ui/Text.tsx";
import { Product } from "$store/commerce/vtex/types.ts";

export interface Props {
  product: Product;
}

function ProductShelfBrand(
  { product }: Props,
) {
  if (!product) {
    return <></>;
  }

  const brandName = product?.brand;

  if (!brandName || !brandName?.length) {
    return <></>;
  }

  return (
    <Text
      class="overflow-hidden overflow-ellipsis whitespace-nowrap"
      variant="caption"
    >
      {brandName}
    </Text>
  );
}

export default ProductShelfBrand;
