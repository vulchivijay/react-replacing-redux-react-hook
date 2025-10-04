export const loader = async ({request, params}) => {
  const id = params.eventId;
  const response = fetch("http://localhost:8080/products/" + id);
  if (!response) {
    throw new Error("Fetching product data failed!");
  }
  else {
    const product = await response;
    // console.log(product);
    return product;
  }
}