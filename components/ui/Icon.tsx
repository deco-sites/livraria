import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "QuestionMarkCircle"
  | "User"
  | "ShoppingCart"
  | "Bars3"
  | "Heart"
  | "MagnifyingGlass"
  | "XMark"
  | "Plus"
  | "Minus"
  | "MapPin"
  | "Phone"
  | "Logo"
  | "Facebook"
  | "Instagram"
  | "Tiktok"
  | "Truck"
  | "TruckPDP"
  | "Discount"
  | "Return"
  | "CreditCard"
  | "Deco"
  | "Discord"
  | "Trash"
  | "FilterList"
  | "WhatsApp"
  | "NotFound"
  | "Mail"
  | "DoubleRightArrow"
  | "RightArrow"
  | "InstagramHeader"
  | "FacebookHeader"
  | "WhatsappHeader"
  | "MyStores"
  | "Wishlist"
  | "HeartFooter"
  | "PhoneFooter"
  | "WhatsappFooter"
  | "MailFooter"
  | "Pix"
  | "Visa"
  | "Mastercard"
  | "DinersClub"
  | "Elo"
  | "AmericanExpress";

export type PaymentSystemsIcons =
  | "Visa"
  | "Mastercard"
  | "DinersClub"
  | "Elo"
  | "AmericanExpress";

export type SocialNetworkIcons =
  | "Facebook"
  | "Instagram";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id?: AvailableIcons | string;
  size?: number;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
