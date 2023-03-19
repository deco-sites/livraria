import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col  sm:flex-row items-center justify-center gap-6 sm:gap-20">
      <div class="flex items-center justify-between gap-2 bg-newsletter pl-20 pr-10 py-[27px]">
        <Text variant="heading-2" tone="default-inverse">
          Fique por dentro das novidades e eventos da Vila!
        </Text>
      </div>
      <form class="flex flex-row items-center gap-2 font-body text-body w-full">
        <input
          class="py-2 px-3 flex-grow bg-footer rounded text-default border-1 border-default"
          id="nome"
          placeholder="Digite seu nome"
        />

        <input
          class="py-2 px-3 flex-grow bg-footer rounded text-default border-1 border-default"
          id="nome"
          placeholder="agora, seu email"
        />
        <button
          class="py-2 px-3 bg-interactive-inverse rounded bg-newsletter"
          type="bgutton" // prevent form's default behavior
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
