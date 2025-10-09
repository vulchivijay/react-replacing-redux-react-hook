import configureStore from "../Hooks/productsStore";

export const loader = async () => {
  const response = await fetch("http://localhost:8080/");
  if (!response.ok) {
    throw new Response("Fetching products data failed!");
  }
  else {
    const products = await response.json();
    configureStore(products);
    return products;
  }
};