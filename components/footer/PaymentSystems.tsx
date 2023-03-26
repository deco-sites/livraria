import Text from "$store/components/ui/Text.tsx";
import Icon, { PaymentSystemsIcons } from "$store/components/ui/Icon.tsx";

export interface PaymentSystemsIconProps {
  /**
   * @title Ícone
   */
  icon?: PaymentSystemsIcons;
  /**
   * @title Largura
   */
  width?: string;
  /**
   * @title Altura
   */
  height?: string;
}
export interface PaymentSystemProps {
  /**
   * @title Título
   * @default Formas de Pagamento
   */
  label?: string;
  /**
   * @title Ícones
   */
  icons?: PaymentSystemsIconProps[];
}

function PaymentSystems(
  { label = "Formas de Pagamento", icons }: PaymentSystemProps,
) {
  return (
    <div class="flex flex-col items-start justify-center pt-4 sm:pt-0">
      <Text
        class="mb-[15px] sm:mb-[25px] font-semibold block"
        variant="heading-footer"
        tone="black"
      >
        {label}
      </Text>

      <div class="flex items-center justify-center gap-2.5 min-h-[44px]">
        {icons && icons?.length &&
          icons?.map(({ icon, width = 44, height = 26 }) => (
            <Icon
              id={icon}
              width={width}
              height={height}
              strokeWidth={0.1}
            />
          ))}
      </div>
    </div>
  );
}

export default PaymentSystems;
