export const loader = async ({request, params}) => {
  const id = params.productId;
  const response = fetch("http://localhost:8080/" + id);
  if (!response) {
    throw new Response("Fetching product data failed!");
  }
  else {
    const product = await response;
    // console.log(product);
    return product;
  }
}