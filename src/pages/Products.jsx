import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const products = useLoaderData();

  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <h1 className="sr-only">Products</h1>
      <div className="flex flex-wrap">
        { products && products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}