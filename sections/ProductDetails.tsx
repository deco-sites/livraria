import ProductDetails from "$store/islands/ProductDetails.tsx";
import type { Props } from "$store/components/product/ProductDetails.tsx";

function ProductDetailsSection(props: Props) {
  return <ProductDetails {...props} />;
}

export default ProductDetailsSection;
