import Modals from "$store/islands/HeaderModals.tsx";
import type { Image } from "deco-sites/std/components/types.ts";
import type { EditableProps as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { LoaderReturnType } from "$live/types.ts";
import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";

import Alert, { AlertProps } from "$store/components/header/Alert.tsx";
import Navbar from "$store/islands/Navbar.tsx";
import { headerHeight, headerMobileHeight } from "./constants.ts";

export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
    width?: number;
    height?: number;
  };
}

export interface Props {
  /** @title Alerts */
  alert?: AlertProps;

  /** @title Search Bar */
  searchbar?: SearchbarProps;
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /**
   * @title Product suggestions
   * @description Product suggestions displayed on search
   */
  productsIS?: LoaderReturnType<Product[] | null>;

  /**
   * @title Enable Top Search terms
   */
  suggestionsIS?: LoaderReturnType<Suggestion | null>;

  /**
   * @description vtex config used for search autocompletion;
   */
  configVTEXIS?: LoaderReturnType<ClientConfigVTEX>;

  /**
   * @title Preload submenu items?
   * @default false
   */
  preloadSubmenu?: boolean;
}

function Header(
  {
    alert,
    searchbar: _searchbar,
    productsIS: products,
    navItems = [],
    suggestionsIS: suggestions,
    configVTEXIS: configVTEX,
    preloadSubmenu = false,
  }: Props,
) {
  const searchbar = { ..._searchbar, products, suggestions, configVTEX };
  return (
    <header class={`h-[${headerMobileHeight}] sm:h-[${headerHeight}]`}>
      <div class="bg-default fixed w-full z-50">
        <Alert
          alert={alert?.alert}
          links={alert?.links}
          alertStore={alert?.alertStore}
          storelink={alert?.storelink}
        />
        <Navbar
          items={navItems}
          searchbar={searchbar}
          preload={preloadSubmenu}
        />
      </div>

      <Modals
        menu={{ items: navItems }}
        searchbar={searchbar}
      />
    </header>
  );
}

export default Header;
