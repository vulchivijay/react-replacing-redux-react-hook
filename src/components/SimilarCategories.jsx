import ProductsCardSmall from "./ProductsCardSmall";

export default function SimilarCategories({ products, productId }) {
  // console.log(products, productId);
  return (
    <div className="similar-category p-4">
      <h2 className="text-xl font-semibold pb-2 border-b-1 border-gray-400">Similar Category Products:</h2>
      <div className="flex flex-wrap gap-4 py-4">
        {products && products.map(category =>
          (category.id !== productId) ?
            <ProductsCardSmall key={category.id} product={category} /> :
            '')
        }
      </div>
    </div>
  );
}