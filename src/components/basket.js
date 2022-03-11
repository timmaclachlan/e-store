import React, { useContext } from "react";
import styled from "styled-components";

import { useNavigate, Link } from "react-router-dom";

import { CartContext } from "../contexts/cartContext";

import { TrashIcon, UpIcon, DownIcon } from "./icons";

const Basket = () => {
    const navigate = useNavigate();
    const { getCartItems, removeProduct, increaseQuantity, decreaseQuantity, clearBasket } = useContext(CartContext);

    const renderCart = () => {
        const cartItems = getCartItems();

        if (cartItems.length > 0) {
            return cartItems.map((p) => (
                <React.Fragment key={p.id}>
                    <div>
                        <Link to={`/products/${p.id}`}>{p.title}</Link>
                    </div>
                    <BasketQty>
                        {p.quantity}

                            <UpIcon width={20} onClick={() => increaseQuantity({id: p.id})}></UpIcon>
                            <DownIcon width={20} onClick={() => decreaseQuantity({id: p.id})}></DownIcon>
                            <TrashIcon
                                width={20}
                                onClick={() => removeProduct({ id: p.id })}
                            ></TrashIcon>

                    </BasketQty>
                    <BasketPrice>&pound;{p.price}</BasketPrice>
                </React.Fragment>
            ));
        } else {
            return <div>The basket is currently empty</div>;
        }
    };

    const renderTotal = () => {
        const cartItems = getCartItems();
        const total = cartItems.reduce(
            (total, item) => (total += item.price * item.quantity),
            0
        );
        return total;
    };

    return (
        <BasketContainer>
            <BasketTitle>Shopping Basket</BasketTitle>
            <BasketButton onClick={() => navigate("/checkout")}>Checkout</BasketButton>

            <BasketTable>
                <BasketHeader>
                    <h4>Item</h4>
                    <h4>Quantity</h4>
                    <h4>Price</h4>
                </BasketHeader>
                <BasketHeaderLine />
                <BasketHeader>{renderCart()}</BasketHeader>
                <BasketHeaderLine />
            </BasketTable>

          <BasketButton onClick={() => clearBasket()}>Clear</BasketButton>
            <BasketTotal>Total: £{renderTotal()}</BasketTotal>
        </BasketContainer>
    );
};

export default Basket;

const BasketContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-rows: 0.25fr 1fr 0.25fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
`;

const BasketTable = styled.div`
    grid-column: 1 / span 3;

    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr;
    column-gap: 20px;
    padding-left: 10px;
`;

const BasketHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr;
`;

const BasketHeaderLine = styled.hr`
    margin-bottom: 20px;
    border: 1px solid gray;
`;

const BasketTitle = styled.h2`
  grid-column: 1 / span 2;

  padding-bottom: 20px;
`;

const BasketQty = styled.h3`
    font-size: 18px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;
`;

const BasketPrice = styled.h3`
    font-size: 20px;
    font-weight: bold;
`;

const BasketTotal = styled.h2`
    justify-self: end;
`;

const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
`;
