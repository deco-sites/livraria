import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";

function Newsletter() {
  return (
    <div class="grid grid-cols-[45%_55%] items-center justify-between bg-white shadow-newsletter">
      <div class="flex items-center justify-between gap-6 bg-newsletter pl-20 pr-10 py-[27px]">
        <Text
          variant="newsletter"
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

      <form
        class="flex flex-row items-center justify-center font-body text-body w-full py-[27px]"
        onSubmit={() => {
          return false;
        }}
      >
        <input
          class="px-3 text-caption bg-white rounded text-black border-1 border-default mr-[25px] w-2/5 h-[35px]"
          id="nome"
          placeholder="Digite seu nome"
        />

        <input
          class="px-3 text-caption bg-white rounded text-black border-1 border-default mr-[25px] w-2/5 h-[35px]"
          id="mail"
          placeholder="agora, seu email"
        />
        <button
          class="rounded bg-newsletter bg-interactive-inverse flex items-center justify-center w-[40px] h-[35px]"
          type="button"
        >
          <Icon
            id="RightArrow"
            width={27}
            height={27}
          />
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
