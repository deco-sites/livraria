// // useAdditionalProperties.ts
// import type { Product } from "deco-sites/std/commerce/types.ts";
// import { useEffect, useState } from "preact/hooks";

// export const useAdditionalProperties = (product: Product) => {
//   // const [additionalProperties, setAdditionalProperties] = useState<
//   //   { name: string; value: string }[]
//   // >([]);
//   // // console.log("product inside hook", product);
//   // const { productID } = product;
//   // // console.log("productID fora", productID);

//   // useEffect(() => {
//   //   if (product) {
//   //     // console.log("productId drento", productID);

//   //     fetch(
//   //       `https://vtex-search-proxy.global.ssl.fastly.net/v2/livrariadavila/api/catalog_system/pub/products/search?fq=productId:${productID}`,
//   //     ).then((response) => {
//   //       // console.log("response", response);
//   //       response.json().then((data) => {
//   //         // console.log("data", data);
//   //         // deno-lint-ignore no-explicit-any
//   //         const properties = data[0].allSpecifications.map((property: any) =>
//   //           property
//   //         );

//   //         // console.log("properties", properties);
//   //         // deno-lint-ignore no-explicit-any
//   //         const specs = properties.map((property: any) => {
//   //           return {
//   //             name: property,
//   //             value: data[0][property][0],
//   //           };
//   //         });
//   //         // console.log("specs", specs);
//   //         setAdditionalProperties(specs);
//   //       });
//   //     });
//   //   }
//   // }, [product]);

//   // return additionalProperties;
// };
