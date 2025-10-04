export default function ProductCard({ product }) {
  // console.log(product);
  return (
    <div className="w-50 m-3 p-4 rounded-xl shadow-md">
      <figure>
        <img src={product.thumbnail} alt={product.title} />
        <figcaption>{product.title}</figcaption>
      </figure>
    </div>
  )
}