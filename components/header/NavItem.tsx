import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  highlight?: boolean;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image, highlight = false } = item;

  return (
    <li
      class={`group flex items-center justify-center ${
        highlight ? "bg-badge" : ""
      }`}
    >
      <a href={href} class="px-[20px] py-[10px] ">
        <Text
          class={` text-menu-desktop  ${highlight ? "text-white" : ""}`}
          variant="menu"
        >
          {label}
          {highlight}
        </Text>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-white z-50 flex items-start justify-center gap-6 border-t-2 border-badge w-screen w-[95%] mx-auto shadow-header mt-[${headerHeight}]`}
            style={{ top: "9px", left: "0px", right: "0px" }}
          >
            <div class="w-full flex ">
              <ul class="grid grid-cols-4 items-start justify-center gap-6 flex-grow">
                {children.map((node) => (
                  <li class="p-6">
                    <a class="hover:underline" href={node.href ?? "/"}>
                      <Text variant="menu">{node.label}</Text>
                    </a>

                    <ul class="flex flex-col gap-1 mt-4">
                      {node.children?.map((leaf) => (
                        <li>
                          <a class="hover:underline" href={leaf.href ?? "/"}>
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
                  class="p-6 w-auto h-auto max-w-md"
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
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
