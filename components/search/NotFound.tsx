import Container from "$store/components/ui/Container.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";

function NotFound() {
  return (
    <Container class="flex flex-col lg:flex-row justify-center items-center pt-5 pb-4 lg:px-5 rounded-[10px] my-5 mx-auto shadow-notfound">
      <div class="flex justify-center items-center">
        <Icon
          id="NotFound"
          width={199}
          height={230}
          viewBox="0 0 199 229.059"
          class="max-w-[80px] h-auto lg:max-w-full"
        />
      </div>

      <div class="w-full p-[25px] lg:w-2/5 lg:ml-5 lg:p-0 flex flex-col justify-center items-start">
        <Text class="text-body text-black mb-[10px]">
          Olá! <span class="text-strong-title">Não encontramos</span>{" "}
          o que você procura.
        </Text>

        <Text class="text-body text-black mb-[10px]">
          Caso tenha urgência, ligue para (11) 3475-6081{" "}
          ou envie uma<br />mensagem por{" "}
          <a
            href="https://wa.me/5511995390321"
            target="_blank"
            class="text-whatsapp"
          >
            <Icon id="WhatsApp" size={16} class="inline align-text-bottom" />
            {" "}
            WhatsApp
          </a>{" "}
          no (11) 99539-0321.
        </Text>
      </div>
    </Container>
  );
}
export default NotFound;
