import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Container from "../ui/Container.tsx";

export interface IconLink {
  icon?: "FacebookHeader" | "InstagramHeader" | "WhatsappHeader" | "MyStores";
  link?: string;
}

export interface AlertProps {
  links?: IconLink[];
  alert?: string;
  storelink?: IconLink[];
  alertStore?: string;
}

function Alert(
  { alert = "", links = [], alertStore = "", storelink = [] }: AlertProps,
) {
  return (
    <Container>
      <div class="flex justify-between">
        <div class="flex h-[26px] justify-center gap-2 items-center w-1/3">
          <Text class="text-[11px] pr-2.5 ">{alert}</Text>
          {links?.map(({ icon, link }) => (
            <a href={link}>
              <Icon id={icon} width={14} height={14} strokeWidth={0.1} />
            </a>
          ))}
        </div>
        <div class="w-1/3 flex"></div>
        <div class="flex h-[26px] justify-center items-center w-1/3">
          {storelink?.map(({ icon, link }) => (
            <a href={link}>
              <Icon id={icon} width={14} height={14} strokeWidth={0.1} />
            </a>
          ))}
          <Text class="text-[11px] ">{alertStore}</Text>
        </div>
      </div>
    </Container>
  );
}

export default Alert;
