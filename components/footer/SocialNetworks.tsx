import Text from "$store/components/ui/Text.tsx";
import Icon, { SocialNetworkIcons } from "$store/components/ui/Icon.tsx";

export interface SocialNetworkIconProps {
  /**
   * @title Ícone da Rede Social
   */
  icon?: SocialNetworkIcons;
  /**
   * @title URLda Rede Social
   */
  href?: string;
  /**
   * @title Propriedade "alt" da imagem
   */
  alt?: string;
}

export interface SocialNetworkProps {
  /**
   * @title Título
   * @default Redes Sociais
   */
  label?: string;
  /**
   * @title Ícones
   */
  icons?: SocialNetworkIconProps[];
}

function SocialNetworks(
  { label = "Redes Sociais", icons }: SocialNetworkProps,
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

      <ul class="flex items-center justify-center gap-4 min-h-[44px]">
        {icons && icons?.length &&
          icons?.map(({ icon, href, alt }) => (
            <li>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
              >
                <Icon
                  id={icon}
                  size={18}
                />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default SocialNetworks;
