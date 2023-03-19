import Container from "$store/components/ui/Container.tsx";
import { useAdditionalProperties } from "$store/sdk/useAdditionalProperties.ts";
import { LoaderReturnType } from "https://denopkg.com/deco-cx/live@0.10.3/types.ts";
import { ProductDetailsPage } from "https://denopkg.com/deco-sites/std@0.1.4/commerce/types.ts";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}
function SpecTable({ page }: { page: ProductDetailsPage }) {
  const {
    product,
  } = page;
  const specifications = useAdditionalProperties(product);
  // console.log("specifications", specifications);

  return (
    <Container class="py-0 sm:py-10">
      <table class="table-auto w-full">
        <tbody>
          {specifications &&
            specifications.map(({ name, value }) => {
              return (
                <tr>
                  <td class="px-2 py-2 border border-gray-200">
                    {name}
                  </td>
                  <td class="px-2 py-2 border border-gray-200">
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

function ProductSpecTable({ page }: Props) {
  // console.log("page IN PST", page);
  if (page) {
    return <SpecTable page={page} />;
  }
  return <>cu</>;
}

export default ProductSpecTable;
