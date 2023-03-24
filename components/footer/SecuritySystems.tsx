import Text from "$store/components/ui/Text.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface SecuritySystemImage {
  /**
   * @title Imagem
   */
  src: LiveImage;
  /**
   * @title URL do link da imagem
   */
  href?: string;
  /**
   * @title Propriedade "alt" da imagem
   */
  alt?: string;
  /**
   * @title Largura máxima da imagem
   */
  maxWidth?: string;
}

export interface SecuritySystemsProps {
  /**
   * @title Título
   * @default Selos de Segurança
   */
  label?: string;
  /**
   * @title Imagens
   */
  images?: SecuritySystemImage[];
}

function SecuritySystems(
  { label = "Selos de Segurança", images }: SecuritySystemsProps,
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
        {images && images?.length &&
          images?.map(({ src, href, alt, maxWidth }) => (
            <>
              {href
                ? (
                  <a
                    href={href}
                    class="flex justify-center items-center"
                    target="_blank"
                  >
                    <img
                      class={`w-full ${maxWidth ? `max-w-[${maxWidth}]` : ""}`}
                      src={src}
                      alt={alt}
                    />
                  </a>
                )
                : (
                  <img
                    class={`w-full ${maxWidth ? `max-w-[${maxWidth}]` : ""}`}
                    src={src}
                    alt={alt}
                  />
                )}
            </>
          ))}
      </div>
    </div>
  );
}

export default SecuritySystems;
