import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["div"];

function ContainerFull({ class: _class = "", ...props }: Props) {
  return <div class={`max-w-[100vw] mx-auto ${_class}`} {...props} />;
}

export default ContainerFull;
