import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import NewsletterLoading from "$store/components/footer/NewsletterLoading.tsx";

import { useEffect, useState } from "preact/hooks";
import { TargetedEvent } from "https://esm.sh/v111/preact@10.11.0/compat/src/index";

function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  console.log("🚀 ~ file: Newsletter.tsx:9 ~ Newsletter ~ loading:", loading);
  console.log(
    "🚀 ~ file: Newsletter.tsx:9 ~ Newsletter ~ submitted:",
    submitted,
  );

  const handleSubmit = (e: TargetedEvent<HTMLFormElement, Event>) => {
    e.preventDefault();
    setLoading(true);

    return false;
  };

  useEffect(() => {
    if (!loading) {
      return;
    }

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <div class="flex flex-col sm:grid sm:grid-cols-[45%_55%] items-center justify-between bg-white shadow-newsletter">
      <div class="flex items-center justify-between gap-2 bg-newsletter pl-5 sm:pl-20 pr-10 py-[27px]">
        <Text
          variant="newsletter"
          tone="default-inverse"
          class="flex justify-between items-center gap-6"
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
        onSubmit={handleSubmit}
      >
        {submitted
          ? (
            <Text
              variant="heading-footer"
              tone="strong-title"
              class="text-center font-regular leading-none"
            >
              Obrigado por se cadastrar!<br />Você será um dos primeiros a
              receber nossas novidades.
            </Text>
          )
          : loading
          ? <NewsletterLoading />
          : (
            <>
              <input
                class="px-3 text-caption bg-white rounded text-black border-1 border-default mr-[25px] w-2/5 h-[35px]"
                id="nome"
                placeholder="Digite seu nome"
                required
              />

              <input
                class="px-3 text-caption bg-white rounded text-black border-1 border-default mr-[25px] w-2/5 h-[35px]"
                id="mail"
                placeholder="agora, seu email"
                required
              />
              <button
                class="rounded bg-newsletter bg-interactive-inverse flex items-center justify-center w-[40px] h-[35px]"
                aria-label="Enviar"
                type="submit"
              >
                <Icon
                  id="RightArrow"
                  width={27}
                  height={27}
                />
              </button>
            </>
          )}
      </form>
    </div>
  );
}

export default Newsletter;
