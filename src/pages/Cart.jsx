import { useStore } from "../Hooks/useStore"

export default function Cart() {
  const { products, quantity, total } = useStore(true)[2];
  console.log(products, quantity, total);
  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <div className="w-full">
        {products && products.map(product => (
          <div key={product.id} className="flex w-full bg-white my-8 p-4 rounded-sm shadow-sm">
            <figure>
              <img src={`http://localhost:8080/thumbnail/${product.thumbnail}`} alt={product.title} />
            </figure>
            <div>
              <h1 className="text-xl font-semibold">{product.title}</h1>
              <p className="text-sm py-4">{product.description}</p>
              <p className="flex justify-end font-semibold">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-end my-4 py-2">
        <b>Total: ${total && total}</b>
      </div>
    </div>
  )
}