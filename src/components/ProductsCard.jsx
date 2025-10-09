import { Link } from "react-router-dom";

export default function ProductsCard({ product }) {
  // console.log(product);
  if (product instanceof Error) {
    return <div>Error: {product.message}</div>;
  }

  return (
    <div className="w-50 bg-white m-3 p-4 rounded-md shadow-md">
      <Link to={`${product.id}`}>
        <figure>
          <img src={`http://localhost:8080/thumbnail/${product.thumbnail}`} alt={product.title} />
          <figcaption className="truncate" title={product.title}>{product.title}</figcaption>
        </figure>
        <div className="flex items-center justify-between">
          <b>${product.price}</b>
          <span className="text-xs">Rating: {product.rating}</span>
        </div>
      </Link>
    </div>
  )
}