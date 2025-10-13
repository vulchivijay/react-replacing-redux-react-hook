// import { useLoaderData } from "react-router-dom";
import ProductsCard from "../components/ProductsCard";
import { useStore } from "../Hooks/useStore";

export default function Products() {
  const products = useStore(true)[0];
  const sProducts = useStore(true)[4];
  console.log(JSON.stringify(sProducts, null, 2));
  // if (products.length === 0) {
  //   products = useLoaderData();
  // }
  if (products instanceof Error) {
    return <div>Error</div>;
  }
  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <h1 className="text-xl font-semibold py-4">
        { sProducts.length > 0 ? 'Search resultL' : 'Products' } :
        { sProducts.length > 0 ? sProducts.length : products.length }
      </h1>
      <div className="flex flex-wrap m-auto">
        { sProducts.length > 0 ?
          sProducts && sProducts.map(product => {
            <ProductsCard key={product.id} product={product} />
          }) :
          products && products.map(product => (
            <ProductsCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  );
};