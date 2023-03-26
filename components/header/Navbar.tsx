import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Searchbar from "../search/Searchbar.tsx";
import Container from "../ui/Container.tsx";

function Navbar({ items, searchbar }: {
  items: INavItem[];
  searchbar: SearchbarProps;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div class="md:hidden bg-white">
        <div
          class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}]  w-full py-[10px] px-[5px]`}
        >
          <HeaderButton variant="menu" />

          <a
            href="/"
            class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
            aria-label="Store logo"
          >
            <Icon id="Logo" width={190} height={10} />
          </a>

          <div class="flex gap-1">
            <HeaderButton variant="user" />
            <HeaderButton variant="wishlist" />
            <HeaderButton variant="cart" />
          </div>
        </div>
        <div class="w-[95%] mx-auto py-[10px]">
          <Searchbar />
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:block">
        <div class="hidden md:flex flex-row justify-center items-center border-b-1 border-default w-full pl-2 pr-3 bg-white">
          <div class="md:flex flex-row w-[1380px] items-center justify-between py-[10px] px-[5px]">
            <div class="flex justify-center w-[452px]">
              <a
                href="/"
                aria-label="Store logo"
                class="flex justify-center w-[452px] cursor-pointer"
              >
                <Icon id="Logo" width={373} height={23} />
              </a>
            </div>
            <div class="flex-auto flex justify-center">
              <Searchbar variant="desktop" />
            </div>
            <div class="flex-none flex items-center justify-end gap-2">
              <Button
                as="a"
                variant="icon"
                href="/login"
                aria-label="Log in"
                class="w-[123px]"
              >
                <Icon id="User" width={22} height={19} strokeWidth={0.4} />
                <Text class="text-[12px] ml-1">Login</Text>
              </Button>
              <Button
                as="a"
                variant="icon"
                href="/wishlist"
                aria-label="wishlist"
                class="w-[123px]"
              >
                <Icon id="Wishlist" width={22} height={19} strokeWidth={0.4} />
                <Text class="text-[12px] ml-1">Favoritos</Text>
              </Button>
              <div class="w-[110px]">
                <HeaderButton variant="cart" />
              </div>
            </div>
          </div>
        </div>
        <div class="md:flex flex-auto flex justify-center bg-white">
          <Container class="w-full ">
            <ul class="md:grid md:grid-flow-col">
              {items.map((item) => <NavItem item={item} />)}
            </ul>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Navbar;
