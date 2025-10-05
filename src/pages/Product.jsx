import { useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();
  console.log(product)
  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <div className="flex items-start">
        <div className="flex-1 p-4">
          <figure className="bg-white">
            <img src={product.images[0]} alt={product.title} />
            <figcaption></figcaption>
          </figure>
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p className="text-md py-2">{product.description}</p>
          <p className="text-xl font-semibold">Rating: {product.rating}/5</p>
          <p className="text-2xl font-semibold">Price: ${product.price}, <span className="text-sm font-medium text-green-700">Discount: {product.discountPercentage}%</span></p>
          <p className="text-md">Availability: <b>"{product.availabilityStatus}"</b></p>
          <p className="text-sm">Return Policy: <span className="font-semibold">{product.returnPolicy}</span></p>
          <p className="text-sm">Warranty: <span className="font-semibold">{product.warrantyInformation}</span></p>
          <div className="flex w-full my-4 gap-4">
            <button className="px-4 py-2 bg-orange-400 text-white shadow-md">Add to cart</button>
            <button className="px-4 py-2 bg-orange-600 text-white shadow-md">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  )
}