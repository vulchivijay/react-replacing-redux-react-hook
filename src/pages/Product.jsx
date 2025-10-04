import { useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();
  console.log("Product : ", product);
  return (
    <>
      Product page
    </>
  )
}

export async function loader({request, params}) {
  const id = params.eventId;
  const response = fetch("http://localhost:8080/products/" + id);
  if (!response) {
    throw new Error("Fetching product data failed!");
  }
  else {
    const data = await response;
    return data;
  }
}