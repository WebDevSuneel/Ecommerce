function CouponComponent() {
    const [couponCode, setCouponCode] = useState('');
    const [appliedCoupon, setAppliedCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
  
    const handleApplyCoupon = () => {
      // Here you can implement your coupon validation logic
      // For simplicity, let's assume 'ABC123' is a valid coupon code
      if (couponCode === 'ABC123') {
        setAppliedCoupon(couponCode);
        // Apply 10% discount for demonstration purposes
        setDiscount(10);
      } else {
        alert('Invalid coupon code');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
        />
        <button onClick={handleApplyCoupon}>Apply Coupon</button>
        {appliedCoupon && <p>Coupon "{appliedCoupon}" applied successfully!</p>}
        {discount > 0 && <p>Discount: {discount}%</p>}
      </div>
    );
  }
  
  export default CouponComponent;