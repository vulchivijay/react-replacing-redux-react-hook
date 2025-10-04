import { useLoaderData } from "react-router-dom";

export default function Products() {
  const products = useLoaderData();
  console.log(products);

  return (
    <div className="max-w-6xl m-auto">
      <h1>Products</h1>
      { products && products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  )
}

export async function loader() {
  const response = await fetch("http://localhost:8080/products");
  if (!response.ok) {
    throw new Error("Fetching products data failed!");
  }
  else {
    const result = await response.json();
    return result;
  }
}