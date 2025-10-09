import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useStore } from "../Hooks/useStore";

export default function Product() {
  const products = useStore(true)[0];
  const dispatch = useStore(true)[1];
  const { productId } = useParams();
  if (products.length === 0) {
    throw new Error('Could not find any products.');
  }
  const product = products.find(product => product.id === parseInt(productId));
  if (!product) {
    throw new Error('Could not find product for id ' + parseInt(id));
  }
  const similarProducts = products.filter(item => item.brand === product.brand);
  if (!similarProducts) {
    throw new NotFoundError('Could not find similar products ' + product.brand);
  }
  const similarCategories = products.filter(item => item.category === product.category);
  if (!similarCategories) {
    throw new NotFoundError('Could not find similar products ' + product.category);
  }

  const handleAddToCart = () => {
    dispatch('AddToCart', product.id);
  }

  const handleBuyNow = () => {
    dispatch('AddToCart', product.id);
  }

  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <div className="flex items-start">
        <div className="flex-1 p-4">
          <figure className="bg-white">
            <img src={`http://localhost:8080/products/${product.images[0]}`} alt={product.title} />
            <figcaption></figcaption>
          </figure>
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-semibold py-2">{product.title}</h1>
          <p className="text-md pt-2 pb-4">{product.description}</p>
          <p className="text-2xl font-semibold pb-4">Price: ${product.price}, <span className="text-sm font-medium text-green-700">Discount: {product.discountPercentage}%</span></p>
          <p className="text-md"><span className="font-semibold">Availability: </span> "{product.availabilityStatus}"</p>
          <p className="text-md"><span className="font-semibold">Shipping Duration: </span>{product.shippingInformation}</p>
          <div className="flex ">
            <div className="flex-1">
              <p className="text-sm"><span className="font-semibold">Return Policy: </span>{product.returnPolicy}</p>
              <p className="text-sm"><span className="font-semibold">Warranty: </span>{product.warrantyInformation}</p>
              <p className="text-xl font-semibold">Rating: {product.rating}/5</p>
              <div className="flex w-full my-4 gap-4">
                <Button
                  bgColor="bg-orange-400"
                  txtColor="text-white"
                  borRadius="rounded-sm"
                  shadow="shadow-md"
                  onClick={handleAddToCart}>Add to Cart</Button>
                <Button
                  bgColor="bg-orange-600"
                  txtColor="text-white"
                  borRadius="rounded-sm"
                  shadow="shadow-md"
                  onClick={handleBuyNow}>Buy now</Button>
              </div>
              <p><b>Branch: </b>{product.brand}</p>
              <p><b>Category: </b>{product.category}</p>
              <p><b>Tags: </b>{product.tags.map(tag => (tag + ", "))}</p>
            </div>
            <div className="flex-1">
              <img src={`http://localhost:8080/qrCode/${product.meta.qrCode}`} alt={product.meta.barcode} />
            </div>
          </div>
          <h2 className="text-2xl font-semibold py-2 border-b-2 border-amber-500">Reviews:</h2>
          {product.reviews.map((review, index) => (
            <div key={index} className="flex flex-col py-2 border-b-1 border-amber-300">
              <div className="flex items-center justify-between">
                <b className="text-xl font-semibold">{review.reviewerName}</b>
                <span className="text-md font-semibold">Reating: {review.rating}</span>
              </div>
              <div className="flex items-start justify-between">
                <span>{review.comment}</span>
                <span className="text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="similar-category p-4">
        <h2 className="text-xl font-semibold pb-2 border-b-1 border-amber-700">Similar Category Products:</h2>
        <div className="flex flex-wrap gap-4 py-4">
          {similarCategories && similarCategories.map(similarCategoryProduct => {
            if (similarCategoryProduct.id !== product.id) {
              return (
                <div key={similarCategoryProduct.id} className="max-w-3xs">
                  <Link to={`/${similarCategoryProduct.id}`}>
                    <figure className="bg-white p-2">
                      <img src={`http://localhost:8080/thumbnail/${similarCategoryProduct.images[0]}`} alt={similarCategoryProduct.title} />
                      <figcaption className="text-center truncate">{similarCategoryProduct.title}</figcaption>
                    </figure>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="similar-products p-4">
        <h2 className="text-xl font-semibold pb-2 border-b-1 border-amber-700">Similar Brand Products:</h2>
        <div className="flex flex-wrap gap-4 py-4">
          {similarProducts && similarProducts.map(similarProduct => {
            if (similarProduct.id !== product.id) {
              return (
                <div key={similarProduct.id} className="max-w-3xs">
                  <Link to={`/${similarProduct.id}`}>
                    <figure className="bg-white p-2">
                      <img src={`http://localhost:8080/thumbnail/${similarProduct.images[0]}`} alt={similarProduct.title} />
                      <figcaption className="text-center truncate">{similarProduct.title}</figcaption>
                    </figure>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  )
}