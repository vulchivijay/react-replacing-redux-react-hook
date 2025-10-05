export const loader = async () => {
  const response = await fetch("http://localhost:8080/products");
  if (!response.ok) {
    throw new Response("Fetching products data failed!");
  }
  else {
    const products = await response.json();
    // console.log(products);
    return products;
  }
}