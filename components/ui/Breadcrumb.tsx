import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";
import { useEffect, useState } from "preact/hooks";

interface Props {
  itemListElement: BreadcrumbList["itemListElement"];
}

function Item({ name, item }: { name?: string; item?: string }) {
  if (!name || !item) {
    return null;
  }

  return (
    <li class="whitespace-nowrap overflow-hidden overflow-ellipsis">
      <a href={item} class="hover:underline">
        <Text variant="caption">{name}</Text>
      </a>
    </li>
  );
}

function Breadcrumb({ itemListElement = [] }: Props) {
  const [jsonLd, setJsonLd] = useState("");

  useEffect(() => {
    const itemList = [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "/",
          name: "Home",
        },
      },
      ...itemListElement.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        item: {
          "@id": item.item,
          name: item.name,
        },
      })),
    ];

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: itemList,
    };
    localStorage.setItem(
      "breadcrumbJsonLd",
      JSON.stringify(breadcrumbJsonLd),
    );
    // console.log("breadcrumbJsonLd", breadcrumbJsonLd);

    setJsonLd(JSON.stringify(breadcrumbJsonLd));
  }, [itemListElement]);

  return (
    <>
      <ul class="flex flex-row gap-2 items-center w-full bg-interactive-inverse p-8 m-0 sm:mb-4">
        <Item name="Home" item="/" />
        {itemListElement.map((item) => (
          <>
            <li class="mt-0.5">
              <Icon id="ChevronRight" width={16} height={16} strokeWidth={2} />
            </li>
            <Item {...item} />
          </>
        ))}
      </ul>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  );
}

export default Breadcrumb;
