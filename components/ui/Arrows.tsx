import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Arrows() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="prev"
          aria-label="Previous item"
        >
          <Icon
            class="text-default-inverse"
            size={20}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Button>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Button
          class="h-12 w-12"
          variant="icon"
          data-slide="next"
          aria-label="Next item"
        >
          <Icon
            class="text-default-inverse"
            size={20}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Button>
      </div>
    </>
  );
}

export default Arrows;
