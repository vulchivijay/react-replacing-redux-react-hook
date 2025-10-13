import ProductsCardSmall from "./ProductsCardSmall";

export default function SimilarBrands({ products, productId }) {
  // console.log(products, productId);
  return (
    <div className="similar-brands p-4">
      <h2 className="text-xl font-semibold pb-2 border-b-1 border-gray-400">Similar Brand Products:</h2>
      <div className="flex flex-wrap gap-4 py-4">
        {products && products.map(brand =>
          (brand.id !== productId) ?
            <ProductsCardSmall key={brand.id} product={brand} /> :
            '')
        }
      </div>
    </div>
  );
}