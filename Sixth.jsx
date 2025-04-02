import GooglePay from "../assets/GooglePay.png";
import SamsungPay from "../assets/samsungpay.png";
import ApplePay from "../assets/ApplePay.png";
import ShopPay from "../assets/ShopPay.png";
import AmericanExpress from "../assets/AmericanExpress.png";
import MasterCard from "../assets/mastercard.png";
import Stripe from "../assets/stripe.png";
import Skrill from "../assets/Skrill.png";
import AmazonPay from "../assets/AmazonPay.png";
import Visa from "../assets/Visa1.png";
import Visa1 from "../assets/Visa&mastercard.png";
import PayPal from "../assets/Paypal.png";
import './Sixth.css'
const paymentMethods = [
  { name: "GooglePay", src: GooglePay },
  { name: "SamsungPay", src: SamsungPay },
  { name: "ApplePay", src: ApplePay },
  { name: "ShopPay", src: ShopPay },
  { name: "AmericanExpress", src: AmericanExpress },
  { name: "MasterCard", src: MasterCard },
  { name: "Stripe", src: Stripe },
  { name: "Skrill", src: Skrill },
  { name: "AmazonPay", src: AmazonPay },

  { name: "PayPal", src: PayPal },
];

const PaymentOptions = () => {
  return (
    <div className="payment-container">
    
      <h2 className="payment-title">Multiple Payment Options</h2>
      <p className="payment-subtitle">
        <span style={{color:'#555',fontSize:"17px"}}>Fast, secure, and flexible payment solutions</span><br />
        <span style={{color:'#555',fontSize:"17px"}}> for a seamless checkout experience.</span>
      </p>

     
      <div className="payment-grid">
        {paymentMethods.map((method, index) => (
          <img key={index} src={method.src} alt={method.name} className="payment-logo" />
        ))}
      </div>
        <center>
            <img src={Visa} alt=""  className="payment-logo"/>
            <img style={{marginLeft:'100px',marginTop:'40px'}} src={Visa1} alt=""  className="payment-logo"/>
        </center>
    </div>
  );
};

export default PaymentOptions;
