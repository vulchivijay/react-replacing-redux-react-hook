import { useLoaderData } from "react-router-dom";

export default function Product() {
  const product = useLoaderData();
  return (
    <div className="max-w-6xl m-auto sm:px-4">
      Product page
    </div>
  )
}