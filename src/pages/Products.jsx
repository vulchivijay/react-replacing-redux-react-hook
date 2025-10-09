import { useLoaderData } from "react-router-dom";
import ProductsCard from "../components/ProductsCard";
// import { useStore } from "../Hooks/useStore";

export default function Products() {
  // const store_products = useStore(true)[0];
  const products = useLoaderData();

  if (products instanceof Error) {
    return <div>Error</div>;
  }

  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <h1 className="sr-only">Products: {products.length}</h1>
      <div className="flex flex-wrap m-auto">
        {products && products.map(product => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}