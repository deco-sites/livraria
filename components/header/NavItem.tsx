import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/hooks";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  highlight?: boolean;
  children?: INavItem[];
  image?: { src?: string; alt?: string; width?: number; height?: number };
}

function NavItem(
  { item, preload = false }: { item: INavItem; preload: boolean },
) {
  const { href, label, children, image, highlight = false } = item;
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    if (preload || !(children && children.length > 0)) {
      return;
    }

    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (preload || !(children && children.length > 0)) {
      return;
    }

    setIsHovering(false);
  };

  return (
    <li
      class={`group flex items-center justify-center ${
        highlight ? "bg-badge" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={href}
        class="px-[20px] py-[10px] "
        title={label}
        aria-label={label}
      >
        <Text
          class={` text-menu-desktop  ${highlight ? "text-white" : ""}`}
          variant="menu"
        >
          {label}
          {highlight}
        </Text>
      </a>

      {(isHovering || preload) && children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-white z-50 flex items-start justify-center gap-6 border-t-2 border-badge w-screen w-[95%] mx-auto shadow-header transition-opacity animate-fade-in`}
            style={{ top: headerHeight, left: "0px", right: "0px" }}
          >
            <div class="w-full flex ">
              <ul class="grid grid-cols-4 items-start justify-center gap-6 flex-grow">
                {children.map((node) => (
                  <li class="p-6">
                    <a class="hover:underline" href={node?.href?.trim() || "/"}>
                      <Text variant="menu">{node.label}</Text>
                    </a>

                    <ul class="flex flex-col gap-1 mt-4">
                      {node.children?.map((leaf) => (
                        <li>
                          <a
                            class="hover:underline"
                            href={leaf?.href?.trim() || "/"}
                          >
                            <Text variant="caption">{leaf.label}</Text>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              {image?.src && (
                <Image
                  class="p-6"
                  src={image.src}
                  alt={image.alt}
                  width={image?.width ?? 100}
                  height={image?.height ?? 100}
                  loading="lazy"
                />
              )}
            </div>
          </div>
        )}
    </li>
  );
}

export default NavItem;
