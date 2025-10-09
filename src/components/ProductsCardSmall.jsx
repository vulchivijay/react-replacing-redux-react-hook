import { Link } from "react-router-dom";

export default function ProductsCardSmall({ product }) {
  // console.log(product);
  if (product instanceof Error) {
    return <div>Error: {product.message}</div>;
  }

  return (
    <div className="max-w-3xs bg-white p-4 rounded-md shadow-md">
      <Link to={`/${product.id}`}>
        <figure className="bg-white p-2">
          <img src={`http://localhost:8080/thumbnail/${product.images[0]}`} alt={product.title} />
          <figcaption className="text-center truncate">{product.title}</figcaption>
        </figure>
      </Link>
    </div>
  )
}