import Container from "$store/components/ui/Container.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";

import type { ComponentChildren } from "preact";
import Newsletter from "./Newsletter.tsx";

export type StringItem = {
  label?: string;
  href?: string;
};

export type IconItem = {
  label?: string;
  href?: string;
  icon?: AvailableIcons;
};

export type Item = StringItem | IconItem;

export type Section = {
  label?: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="text-footer" tone="black">
      {isIcon(item)
        ? (
          <a class="mb-[15px] block" href={item?.href}>
            <Icon
              id={item?.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />

            <span>
              {item?.label}
            </span>
          </a>
        )
        : (
          <a href={item?.href}>
            {item?.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return (
    <div
      class={`max-w-[1300px] mx-auto flex justify-between w-full ${_class}`}
    >
      {children}
    </div>
  );
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-footer flex flex-col">
      <Newsletter />

      <FooterContainer class="p-2.5">
        {/* Desktop view */}
        <ul class="hidden sm:flex flex-row gap-20 grid grid-cols-[25%_25%_25%_25%] divide-x-1">
          {sections.map((section) => (
            <li class="pt-5 pb-10">
              <div>
                <Text
                  class="mb-[25px] font-semibold block"
                  variant="heading-footer"
                  tone="black"
                >
                  {section.label}
                </Text>

                <ul
                  class={`flex ${
                    isIcon(section.children[0]) ? "flex-row" : "flex-col"
                  }`}
                >
                  {section.children.map((item) => (
                    <li class="leading-none">
                      <SectionItem item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <ul class="hidden sm:flex items-center justify-center gap-2">
          <li>
            <a
              href="https://www.facebook.com/livrariadavila/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook logo"
            >
              <Icon
                id="Facebook"
                size={18}
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/livrariadavila/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram logo"
            >
              <Icon
                id="Instagram"
                size={18}
              />
            </a>
          </li>
        </ul>

        {/* Mobile view */}
        <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
          {sections.map((section) => (
            <li>
              <Text variant="body" tone="default-inverse">
                <details>
                  <summary>
                    {section?.label}
                  </summary>

                  <ul
                    class={`flex ${
                      isIcon(section.children[0]) ? "flex-row" : "flex-col"
                    } gap-2 px-2 pt-2`}
                  >
                    {section.children.map((item) => (
                      <li class="mb-[15px]">
                        <SectionItem item={item} />
                      </li>
                    ))}
                  </ul>
                </details>
              </Text>
            </li>
          ))}
        </ul>
      </FooterContainer>

      <div class="bg-white border-t-1 border-solid border-lightgray p-2.5">
        <FooterContainer class="grid grid-cols-[50%_50%]">
          <Text
            class="text-xs text-copyright"
            tone="default"
          >
            <p>
              Copyright 2021 | Todos os direitos Reservados a Livraria da Vila.
            </p>
            <p>CNPJ sob o n° 54.430.962/0006-14</p>
          </Text>

          <Text
            class="flex items-center gap-1 text-xs text-copyright"
            variant="body"
            tone="default"
          >
            Developed with <Icon id="HeartFooter" width={11} height={10} /> by
            {" "}
            <b>Time 19</b>
            and Powered by
            <a
              href="https://www.deco.cx"
              aria-label="powered by https://www.deco.cx"
            >
              <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
            </a>
          </Text>
        </FooterContainer>
      </div>
    </footer>
  );
}

export default Footer;
