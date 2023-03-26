import Container from "$store/components/ui/Container.tsx";
import { LoaderReturnType } from "$live/types.ts";
import Text from "$store/components/ui/Text.tsx";
import { ProductDetailsPage } from "$store/commerce/vtex/types.ts";

export interface Props {
  /**
   * @title Título
   */
  title?: string;
  page: LoaderReturnType<ProductDetailsPage | null>;
}
export interface SpecTableProps {
  title?: string;
  page: ProductDetailsPage;
}

function SpecTable({ title, page }: SpecTableProps) {
  const {
    product,
  } = page;

  const specifications = product?.productSpecifications;

  if (!specifications || !specifications?.length) {
    return <></>;
  }

  return (
    <Container class="py-0 sm:py-10 sm:mb-10 bg-white rounded-[0.25rem] p-8 shadow-section">
      {title && (
        <h2 class="text-center row-start-1 col-span-full mb-4">
          <Text variant="heading-4" tone="product-title">{title}</Text>
        </h2>
      )}

      <table class="table-auto w-full">
        <tbody>
          {specifications &&
            specifications.map(({ name, value }) => {
              return (
                <tr class="even:bg-interactive-inverse odd:bg-gray-100 border-0">
                  <td class="px-2 py-2">
                    {name}
                  </td>
                  <td class="px-2 py-2">
                    {value}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Container>
  );
}

function ProductSpecTable({ page, title }: Props) {
  if (page) {
    return <SpecTable page={page} title={title} />;
  }
  return <></>;
}

export default ProductSpecTable;
