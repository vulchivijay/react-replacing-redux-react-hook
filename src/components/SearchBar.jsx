export default function SearchBar() {
  return (
    <div className="w-full mx-4">
      <input
        type="text"
        className="w-full px-4 py-2 bg-gray-200 text-md rounded-2xl border-1 border-gray-200"
        placeholder="Searching Products, Brands, and more" />
    </div>
  )
}