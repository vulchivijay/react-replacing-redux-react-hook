import { useLoaderData } from "react-router-dom";

export default function Products() {
  const products = useLoaderData();

  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <h1>Products</h1>
      { products && products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  )
}