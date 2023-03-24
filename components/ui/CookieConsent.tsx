import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";

const script = () => `
const callback = () => {
  const KEY = 'store-cookie-consent';
  const ACCEPTED = 'accepted';
  const HIDDEN = "translate-y-[200%]";
  
  const consent = localStorage.getItem(KEY);
  const elem = document.getElementById("cookie-consent-deco");
  
  if (consent !== ACCEPTED) {
    elem.querySelector('[data-button-cc-accept]').addEventListener('click', function () {
      localStorage.setItem(KEY, ACCEPTED);
      elem.classList.add(HIDDEN);
    });
    // elem.querySelector('[data-button-cc-close]').addEventListener('click', function () {
    //   elem.classList.add(HIDDEN);
    // });
    elem.classList.remove(HIDDEN);
  } 
};

window.addEventListener('scroll', callback, { once: true });
`;

function CookieConsent() {
  return (
    <>
      <div
        id="cookie-consent-deco"
        class="transform-gpu translate-y-[200%] transition fixed bottom-0 w-screen z-50"
      >
        <div class="px-[50px] py-[15px] border border-default flex flex-col sm:flex-row gap-4 items-start shadow-cookie bg-white grid grid-cols-[80%_20%]">
          <Text class="flex-grow" variant="caption">
            Nós utilizamos cookies para melhorar sua experiência e fornecer
            anúncios personalizados. Ao continuar, entendemos que você está
            ciente e de acordo com nossa Política de Privacidade.{"  "}
            <Text class="underline" variant="caption">
              Li e aceito a{" "}
              <a href="/" class="underline">Política de Privacidade.</a>
            </Text>
          </Text>

          <div class="flex flex-col sm:flex-row justify-center items-center w-full sm:w-auto">
            <Button data-button-cc-accept="true" variant="cookie">
              Aceitar e Fechar
            </Button>
            {/* <Button data-button-cc-close variant="secondary">Fechar</Button> */}
          </div>
        </div>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script() }} />
    </>
  );
}

export default CookieConsent;
