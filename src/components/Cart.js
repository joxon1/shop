export default function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart black darken-4 white-text">
      <i class="material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
