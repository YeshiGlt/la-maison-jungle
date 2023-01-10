import "../styles/Cart.css";

function Cart() {
  const monsteraPrice = 8;
  const lierrePrice = 10;
  const bouquetPrice = 15;

  return (
    <div>
      <h2>Panier</h2>
      <ul className="lmj-cart">
        <li>monstera : {monsteraPrice}€</li>
        <li>lierre : {lierrePrice}€</li>
        <li>bouquet de fleurs : {bouquetPrice}€</li>
      </ul>
      <span>Total : {monsteraPrice + lierrePrice + bouquetPrice}€</span>
    </div>
  );
}

export default Cart;
