import Button from "../components/Button";
import { useStore } from "../Hooks/useStore"

export default function Cart() {
  const { products, total } = useStore(true)[2];
  const dispatch = useStore(true)[1]

  const handleCartUpdate = (id, type) => {
    dispatch('QuantityUpdate', {id, type});
  };

  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <div className="w-full">
        {products && products.map(product => (
          <div key={product.id} className="flex w-full bg-white my-4 p-2 rounded-sm shadow-sm">
            <figure className="w-30">
              <img src={`http://localhost:8080/thumbnail/${product.thumbnail}`} alt={product.title} />
            </figure>
            <div className="w-full pl-4">
              <h1 className="text-xl font-semibold">{product.title}</h1>
              <p className="text-sm py-4">{product.description}</p>
              <div className="flex items-center justify-end">
                <div className="felx items-center text-center mr-2">
                  <Button
                  bgColor="bg-orange-400"
                  txtColor="text-white"
                  borRadius="rounded-sm"
                  shadow="shadow-md"
                  onClick={() => handleCartUpdate(product.id, 'decrement')}>-</Button>
                  <input type="number" className="w-15 h-9 mx-1 border-1 border-amber-300 text-right" value={product.quantity} readOnly />
                  <Button
                  bgColor="bg-orange-400"
                  txtColor="text-white"
                  borRadius="rounded-sm"
                  shadow="shadow-md"
                  onClick={() => handleCartUpdate(product.id, 'increment')}>+</Button>
                </div>
                <p className="flex justify-end font-semibold">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-end my-4 py-8">
        <b>Total: ${(total ?? 0).toFixed(2)}</b>
      </div>
    </div>
  )
}