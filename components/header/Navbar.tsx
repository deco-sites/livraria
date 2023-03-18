import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";

import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";
import Searchbar from "../search/Searchbar.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] border-b-1 border-default w-full px-2 gap-2`}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Icon id="Logo" width={126} height={16} />
        </a>

        <div class="flex gap-1">
          <HeaderButton variant="search" />
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-center items-center border-b-1 border-default w-full pl-2 pr-3">
        <div class="md:flex flex-row w-[1380px] items-center justify-between">
          <div class="flex-none w-[373px]">
            <a
              href="/"
              aria-label="Store logo"
              class="block w-[373px] cursor-pointer"
            >
              <Icon id="Logo" width={373} height={23} />
            </a>
          </div>
          <div class="flex-auto flex justify-center">
            <Searchbar />
          </div>
          <div class="flex-none w-44 flex items-center justify-end gap-2">
            <HeaderButton variant="search" />
            <HeaderSearchMenu searchbar={searchbar} />
            <Button
              as="a"
              variant="icon"
              href="/login"
              aria-label="Log in"
            >
              <Icon id="User" width={20} height={20} strokeWidth={0.4} />
            </Button>
            <HeaderButton variant="cart" />
          </div>
        </div>
      </div>
      <div class="flex-auto flex justify-center">
        <div class="md: w-[1380px] flex justify-between">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
