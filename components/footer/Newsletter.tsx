import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Newsletter() {
  return (
    <div class="grid grid-cols-[45%_55%] items-center justify-between">
      <div class="flex items-center justify-between gap-2 bg-newsletter pl-20 pr-10 py-[27px]">
        <Text
          variant="heading-2"
          tone="default-inverse"
          class="flex justify-between items-center gap-2"
        >
          <Icon
            id="Mail"
            size={46}
          />
          <div>
            <p>Fique por dentro das</p>
            <p>novidades e eventos da Vila!</p>
          </div>
        </Text>

        <Icon
          id="DoubleRightArrow"
          width={22}
          height={25}
        />
      </div>

      <form class="flex flex-row items-center justify-center font-body text-body w-full py-[27px]">
        <input
          class="px-3 bg-white rounded text-black border-1 border-default mr-[25px] w-2/5 h-[35px]"
          id="nome"
          placeholder="Digite seu nome"
        />

        <input
          class="px-3 bg-white rounded text-black border-1 border-default mr-[25px] w-2/5 h-[35px]"
          id="nome"
          placeholder="agora, seu email"
        />
        <button
          class="py-2 px-3 bg-interactive-inverse rounded bg-newsletter w-[40px] h-[37px]"
          type="bgutton" // prevent form's default behavior
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
