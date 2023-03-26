import Arrows from "$store/components/ui/Arrows.tsx";
import Button from "$store/components/ui/Button.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import Text from "$store/components/ui/Text.tsx";
import SliderControllerJS from "$store/islands/SliderJS.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { useId } from "preact/hooks";
import { animation, keyframes, tw } from "twind/css";

export interface Banner {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href?: string;
    /** @description Image text title */
    title?: string;
    /** @description Image text subtitle */
    subTitle?: string;
    /** @description Button label */
    label?: string;
  };
}

export interface Props {
  images?: Banner[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
  /** @description When navigation arrows should be rendered. */
  showNavigationArrows?: "mobileOnly" | "desktopOnly" | "always" | "never";
  /** @description When pagination dots should be rendered. */
  showPaginationDots?: "mobileOnly" | "desktopOnly" | "always" | "never";
  /** @description Show dots with progressive status about current timeout. */
  showProgressiveDots?: boolean;
}

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const {
    alt,
    mobile,
    desktop,
    action,
  } = image;

  return (
    <div class="relative h-auto sm:max-h-[255px] min-w-[100vw] overflow-y-hidden">
      <a
        href={action?.href ?? "/"}
        aria-label={alt?.trim() ?? action?.label?.trim() ?? ""}
      >
        <Picture class="w-full" preload={lcp}>
          <Source
            media="(max-width: 767px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={mobile}
            alt={mobile}
            width={414}
            height={128}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority={lcp ? "high" : "auto"}
            src={desktop}
            alt={desktop}
            width={1920}
            height={255}
          />
          <img
            class="object-cover w-full sm:h-full"
            loading={lcp ? "eager" : "lazy"}
            src={desktop}
            alt={desktop}
          />
        </Picture>
        {action && (
          <div
            class="absolute top-0 bottom-0 m-auto left-0 right-0 sm:right-auto sm:left-[12%] max-h-min max-w-[235px] flex flex-col gap-4 bg-hover-inverse p-4 rounded no-action-button"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <Text variant="heading-1" tone="default-inverse">
              {action.title}
            </Text>
            <Text variant="heading-3" tone="default-inverse">
              {action.subTitle}
            </Text>
            <Button variant="secondary">{action.label}</Button>
          </div>
        )}
      </a>
    </div>
  );
}

function ProgressiveDots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }`,
        }}
      >
      </style>
      <ol class="flex items-center justify-center col-span-full gap-4 z-10 row-start-4">
        {images?.map((_, index) => (
          <li class="h-full">
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="h-full rounded focus:outline-none group"
            >
              <div
                class={tw`group-disabled:${
                  animation(
                    `${interval}s ease-out 1 forwards`,
                    keyframes`
                      from: {
                        --dot-progress: 0%;
                      }
                      to {
                        --dot-progress: 100%;
                      }
                    `,
                  )
                } w-16 sm:w-20 h-0.5`}
                style={{
                  background:
                    "linear-gradient(to right, #FFFFFF var(--dot-progress), rgba(255, 255, 255, 0.4) var(--dot-progress))",
                }}
              />
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}

function Dots({ images }: Props) {
  return (
    <>
      <ol class="flex items-center justify-center col-span-full gap-2.5 z-10 row-start-4">
        {images?.map((_, index) => (
          <li class="h-auto">
            <button
              data-dot={index}
              aria-label={`go to slider item ${index}`}
              class="w-2.5 h-2.5 border-black border-1 border-solid rounded-[20px] focus:outline-none group bg-white opacity-25 disabled:opacity-75 transition-opacity"
            />
          </li>
        ))}
      </ol>
    </>
  );
}

function BannerCarousel(
  {
    images,
    preload,
    interval,
    showNavigationArrows = "always",
    showPaginationDots = "always",
    showProgressiveDots = false,
  }: Props,
) {
  const id = useId();

  // const shouldShowArrows = Boolean((showNavigationArrows === 'always' ||
  //     (showNavigationArrows === 'mobileOnly' && isMobile) ||
  //     (showNavigationArrows === 'desktopOnly' && !isMobile)))

  // const isMobile
  // ||
  // (showPaginationDots === "mobileOnly" && isMobile) ||
  // (showPaginationDots === "desktopOnly" && !isMobile),

  const shouldShowPaginationDots = showPaginationDots === "always";

  return (
    <div
      id={id}
      class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_48px]"
    >
      <Slider class="col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((image, index) => (
          <BannerItem image={image} lcp={index === 0 && preload} />
        ))}
      </Slider>

      {showNavigationArrows && <Arrows />}

      {shouldShowPaginationDots &&
        (showProgressiveDots
          ? <ProgressiveDots images={images} interval={interval} />
          : <Dots images={images} interval={interval} />)}

      <SliderControllerJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default BannerCarousel;
