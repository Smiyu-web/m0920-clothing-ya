import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartDropdown = ({ cartItemProps }) => {
  return (
    <CartDropdownContainer>
      <div className="cart-items">
        {cartItemProps.length ? (
          cartItemProps.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = (state) => ({
  cartItemProps: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
