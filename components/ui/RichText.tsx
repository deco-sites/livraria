import PreactMarkdown from "preact-markdown";
import remarkGfm from "remark-gfm";
import Text from "$store/components/ui/Text.tsx";

export interface Props {
  /**
   * @title Texto
   * @description Texto em linguagem Markdown a ser mostrado (confira o seguinte guia caso tenha dúvidas de como funciona o Markdown: https://www.markdownguide.org/cheat-sheet/)
   */
  text?: string;
}

function RichText({ text }: Props) {
  console.log("🚀 ~ file: RichText.tsx:10 ~ RichText ~ text:", text);

  if (!text || !text?.length) {
    return <></>;
  }

  return (
    <Text variant="body">
      <PreactMarkdown remarkPlugins={[remarkGfm]}>
        {text}
      </PreactMarkdown>
    </Text>
  );
}

export default RichText;
