import React from "react";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function totalQty(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item.quantity;
  }
  return sum;
}

const CartIcon = ({ toggleCartHiddenProps, cartItemProps }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" onClick={toggleCartHiddenProps} />
      <span className="item-count">{totalQty(cartItemProps)}</span>
      {/* <span className="item-count">{itemCount}</span> */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenProps: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  cartItemProps: state.cart.cartItems,
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((acc, cartItems) => {
//     acc + cartItems.quantity;
//   }, 0),
// });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
