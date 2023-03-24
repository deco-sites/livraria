import { JSX } from "preact";
import { forwardRef } from "preact/compat";

type Props = JSX.IntrinsicElements["span"] & {
  tone?:
    | "default"
    | "default-inverse"
    | "subdued"
    | "subdued-inverse"
    | "price"
    | "section-title"
    | "strong-title"
    | "positive"
    | "critical"
    | "black"
    | "white";
  variant?:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "menu"
    | "button"
    | "regular"
    | "body"
    | "caption"
    | "list-price"
    | "heading-footer"
    | "text-footer"
    | "newsletter";
};

const Text = forwardRef<HTMLSpanElement, Props>((
  { tone = "default", variant = "body", class: _class = "", ...props },
  ref,
) => {
  return (
    <span
      {...props}
      class={`font-${variant} text-${variant} text-${tone} ${_class}`}
      ref={ref}
    />
  );
});

export default Text;
