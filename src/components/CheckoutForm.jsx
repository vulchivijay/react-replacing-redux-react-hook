export default function CheckoutForm() {
  return (
    <>
      <div>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div>
        <label>Mobile:</label>
        <input type="number" placeholder="Enter your mobile number" />
      </div>
      <div>
        <label>Address:</label>
        <textarea placeholder="Enter shipping address" />
      </div>
    </>
  )
}