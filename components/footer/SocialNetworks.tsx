import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function SocialNetworks() {
  return (
    <div class="flex flex-col items-start justify-center pt-4 sm:pt-0">
      <Text
        class="mb-[25px] font-semibold block"
        variant="heading-footer"
        tone="black"
      >
        Redes Sociais
      </Text>

      <ul class="flex items-center justify-center gap-4 min-h-[44px]">
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
    </div>
  );
}

export default SocialNetworks;
