import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { useUI } from "$store/sdk/useUI.ts";

interface Options {
  skuId: string;
  sellerId?: string;
  quantity?: number;
}

export const useAddToCart = ({ skuId, sellerId, quantity = 1 }: Options) => {
  const isAddingToCart = useSignal(false);
  const { displayCart } = useUI();
  const { addItems, loading } = useCart();

  const onClick = useCallback(async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!sellerId) {
      return;
    }

    try {
      isAddingToCart.value = true;
      await addItems({
        orderItems: [{ id: skuId, seller: sellerId, quantity }],
      });

      displayCart.value = true;
    } finally {
      isAddingToCart.value = false;
    }
  }, [skuId, sellerId, quantity]);

  return {
    onClick,
    disabled: loading.value,
    loading: isAddingToCart.value,
  };
};
