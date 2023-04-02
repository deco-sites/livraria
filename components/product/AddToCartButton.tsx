import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";

interface Props {
  skuId: string;
  sellerId: string;
  quantity?: number;
}

function AddToCartButton({ skuId, sellerId, quantity = 1 }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
    quantity,
  });

  return (
    <>
      <Button
        {...props}
        class="w-full h-full bg-primary hover:bg-primary text-white font-regular"
      >
        Comprar
      </Button>
    </>
  );
}

export default AddToCartButton;
