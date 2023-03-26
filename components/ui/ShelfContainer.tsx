import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["div"];

function ShelfContainer({ class: _class = "", ...props }: Props) {
  return <div class={`max-w-[1200px] mx-auto ${_class}`} {...props} />;
}

export default ShelfContainer;
