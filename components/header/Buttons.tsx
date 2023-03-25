import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";

function SearchButton() {
  const { displaySearchbar } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="search icon button"
      onClick={() => {
        displaySearchbar.value = !displaySearchbar.peek();
      }}
    >
      <Icon id="MagnifyingGlass" width={20} height={20} strokeWidth={0.1} />
    </Button>
  );
}

function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon id="Bars3" width={20} height={20} strokeWidth={0.01} />
    </Button>
  );
}

function CartButton() {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;

  return (
    <Button
      variant="icon"
      class="relative"
      aria-label="open cart"
      disabled={loading.value}
      onClick={() => {
        displayCart.value = true;
      }}
    >
      <Icon id="ShoppingCart" width={22} height={31} strokeWidth={2} />
      {totalItems && (
        <span class="absolute text-[9px] right-0 top-0 rounded-full bg-badge text-white w-4 h-4 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
}
function WishlistButton() {
  return (
    <Button
      variant="icon"
      class="relative"
      aria-label="open wishlist"
      onClick={() => {
        window.location.href = "/wishlist";
      }}
    >
      <Icon id="Wishlist" width={23} height={19} strokeWidth={2} />
    </Button>
  );
}
function UserButton() {
  return (
    <Button
      variant="icon"
      class="relative"
      aria-label="open login"
      onClick={() => {
        window.location.href = "/login";
      }}
    >
      <Icon id="User" width={22} height={19} strokeWidth={2} />
    </Button>
  );
}

function HeaderButton(
  { variant }: { variant: "cart" | "search" | "menu" | "wishlist" | "user" },
) {
  if (variant === "cart") {
    return <CartButton />;
  }

  if (variant === "search") {
    return <SearchButton />;
  }

  if (variant === "menu") {
    return <MenuButton />;
  }
  if (variant === "wishlist") {
    return <WishlistButton />;
  }
  if (variant === "user") {
    return <UserButton />;
  }

  return null;
}

export default HeaderButton;
