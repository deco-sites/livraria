import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import ButtonInput from "$store/components/ui/ButtonInput.tsx";
import { formatPrice } from "$store/sdk/format.ts";

import { useCart } from "https://denopkg.com/deco-sites/std@0.2.1/commerce/vtex/hooks/useCart.ts";
import type {
  SimulationOrderForm,
  SKU,
} from "https://denopkg.com/deco-sites/std@0.2.1/commerce/vtex/types.ts";

import { signal, useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import Icon from "../ui/Icon.tsx";

export interface Props {
  items: Array<SKU>;
}

function ShippingContentError() {
  return (
    <div class="p-2">
      <span>CEP inválido</span>
    </div>
  );
}

function ShippingContent({ simulation }: { simulation: SimulationOrderForm }) {
  const { cart } = useCart();

  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;

  if (!simulation.logisticsInfo?.length) {
    return <ShippingContentError />;
  }

  const methods = simulation.logisticsInfo.reduce(
    (initial, logistic) => {
      return [...initial, ...logistic.slas];
    },
    [],
  );

  if (!methods?.length) {
    return <ShippingContentError />;
  }

  const handleShippingTime = (estimate: string) => {
    const [, time, type] = estimate.split(/(\d+)/);

    if (type === "bd") return `${time} dias úteis`;
    if (type === "d") return `${time} dias`;
    if (type === "h") return `${time} horas`;
  };

  return (
    <ul class="p-2">
      {methods.map((method) => (
        <li class="flex justify-between items-center py-2 border-[#e4e4e4] not-first-child:border-t-1">
          <Text variant="body" class="text-button">
            receba em até{" "}
            <span class="font-semibold block">
              {handleShippingTime(method.shippingEstimate)}*
            </span>
          </Text>
          <Text variant="body" class="text-button text-center">
            {method.name}
          </Text>
          <Text variant="body" class="text-base font-semibold text-right">
            {method.price === 0 ? "Grátis" : (
              formatPrice(method.price / 100, currencyCode!, locale)
            )}
          </Text>
        </li>
      ))}
    </ul>
  );
}

function ShippingSimulation({ items }: Props) {
  const postalCode = useSignal("");
  const loading = useSignal(false);

  const { simulation } = useCart();

  const handleSimulation = useCallback(() => {
    const { simulateShipping } = useCart();
    const simulationData = {
      items: items,
      postalCode: postalCode.value,
      country: "BRA",
    };

    if (postalCode.value.length == 8) {
      loading.value = true;
      simulateShipping(simulationData)
        .then(() => {
          loading.value = false;
        });
    } else {
      simulation.value = "error";
    }
  }, []);

  return (
    <div class="flex items-center justify-start">
      <Icon id="TruckPDP" width={20} height={20} strokeWidth={0.1} />{" "}
      <Text class="px-[7px]">
        Calcular o Frete
      </Text>

      <div>
        <form
          class="flex"
          onSubmit={(e) => {
            e.preventDefault();
            handleSimulation();
          }}
        >
          <ButtonInput
            as="input"
            type="text"
            variant="input"
            class="w-full"
            onChange={(e) => {
              postalCode.value = e.currentTarget.value;
              simulation.value = undefined;
            }}
            value={postalCode.value}
            maxlength={8}
            minlength={8}
          >
          </ButtonInput>
          <Button
            class="ml-2 bg-primary hover:bg-primary text-white font-regular"
            type="submit"
            loading={loading.value}
          >
            OK
          </Button>
        </form>
      </div>
      <div>
        {simulation.value && (
          <div>
            <ShippingContent simulation={simulation.value} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ShippingSimulation;
