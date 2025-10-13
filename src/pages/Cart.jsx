// import { useLoaderData } from "react-router-dom";
import { useRef } from "react";
import { useStore } from "../Hooks/useStore";
import Button from "../components/Button";
import ProductsCard from "../components/ProductsCard";
import CheckoutModal from "../components/CheckoutModal";

export default function Cart() {
  let { products: defaultProducts } = useStore(true)[0];
  const dispatch = useStore(true)[1];
  const { products, total } = useStore(true)[2];
  const checkoutModal = useRef();

  // if (defaultProducts === undefined) {
  //   defaultProducts = useLoaderData();
  // }

  if (defaultProducts instanceof Error) {
    return <div>Error</div>;
  }

  const handleCartUpdate = (id, type) => {
    dispatch('QuantityUpdate', { id, type });
  };

  const handleCheckout = () => {
    checkoutModal.current.open();
  }

  const handleCloseClick = () => {
    checkoutModal.current.close();
  }

  const handleSubmitClick = () => {
    //
  }

  const checkoutModalAction = (
    <>
      <div className="flex items-center justify-end gap-6 pt-8">
        <Button
          bgColor="bg-gray-800"
          txtColor="text-white"
          borRadius="rounded-sm"
          shadow="shadow-md"
          onClick={() => handleCloseClick(checkoutModal)}>Cancel</Button>
        <Button
          bgColor="bg-orange-400"
          txtColor="text-white"
          borRadius="rounded-sm"
          shadow="shadow-md"
          onClick={handleSubmitClick}>Confirm Order</Button>
      </div>
    </>
  );

  return (
    <div className="max-w-6xl m-auto sm:px-4">
      <CheckoutModal
        ref={checkoutModal}
        title='Check out Form'
        actions={checkoutModalAction}
        modalId="checkboutModal"
      />
      <div className="w-full">
        {total === 0 ? <h1 className="text-xl text-center font-semibold py-4">Empty Cart</h1> : ''}
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
      <div className="flex flex-row items-center justify-end my-4 py-8 border-t-1 border-b-1 border-gray-800">
        <Button
          bgColor="bg-green-400"
          txtColor="text-white"
          borRadius="rounded-sm"
          shadow="shadow-md"
          onClick={handleCheckout}>Check out</Button>
        <b className="ml-4">Total: ${(total ?? 0).toFixed(2)}</b>
      </div>
      <h1 className="text-xl font-semibold pb-4">Continue shopping</h1>
      <div className="flex flex-wrap m-auto">
        {defaultProducts && defaultProducts.map(defaultProduct => (
          <ProductsCard key={defaultProduct.id} product={defaultProduct} />
        ))}
      </div>
    </div>
  )
}