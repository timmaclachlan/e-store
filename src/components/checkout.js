import React, { useState, useContext, useEffect } from "react";

import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/cartContext";

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();
    const { getItems } = useContext(CartContext);

    useEffect(() => {
        setCartItems(getItems());
    }, [getItems]);

    const renderCart = () => {
        if (cartItems.length > 0) {
            return cartItems.map((p) => (
                <React.Fragment key={p.id}>
                    <div>{p.title}</div>
                    <BasketQty>{p.quantity}</BasketQty>
                    <BasketPrice>&pound;{p.price}</BasketPrice>
                </React.Fragment>
            ));
        } else {
            return <div>The basket is currently empty</div>;
        }
    };

    const renderTotal = () => {
        const cartItems = getItems();

        const total = cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
        return total;
    };

    const confirmOrder = () => {
        navigate('/orderconfirmation');
    }

    return (
        <CheckoutContainer>
            {/* Row 1 */}
            <CheckoutTitle>Shopping Checkout</CheckoutTitle>

            {/* Row 2 */}
            <BasketTable>
                <BasketHeader>
                    <h4>Item</h4>
                    <h4>Quantity</h4>
                    <h4>Price</h4>
                </BasketHeader>
                <CheckoutHeaderLine />

                <BasketHeader>{renderCart()}</BasketHeader>
            </BasketTable>

            {/* Row 3 */}
            <BasketTotal>Total: £{renderTotal()}</BasketTotal>

            {/* Row 4 */}
            <CheckoutHeader>
                <h4>Your Details</h4>
            </CheckoutHeader>

            {/* Row 5 */}
            <CheckoutHeaderLine />


                {/* Row 6 */}
                <CheckoutTable>
                    <CheckoutFormLabel>Name</CheckoutFormLabel>
                    <input type="text" name="name" />
                    <CheckoutFormLabel>Email</CheckoutFormLabel>
                    <input type="text" name="email" />
                </CheckoutTable>

                {/* Row 7 */}
                <CheckoutHeader>
                    <h4>Address Details</h4>
                </CheckoutHeader>

                {/* Row 8 */}
                <CheckoutHeaderLine />

                {/* Row 9 */}
                <CheckoutTable>
                    <CheckoutFormLabel>Copy to shipping</CheckoutFormLabel>
                    <CheckoutFormCheckbox type="checkbox" />

                    <CheckoutFormLabel>Billing Address</CheckoutFormLabel>

                    <CheckoutAddress>
                        <input type="text" name="billing-address1" />
                        <input type="text" name="billing-address2" />
                        <input type="text" name="billing-city" />
                    </CheckoutAddress>

                    <CheckoutFormLabel>Shipping Address</CheckoutFormLabel>

                    <CheckoutAddress>
                        <input type="text" name="shipping-address1" />
                        <input type="text" name="shipping-address2" />
                        <input type="text" name="shipping-city" />
                    </CheckoutAddress>
                </CheckoutTable>


            <CancelButton onClick={() => navigate("/basket")}>
                Cancel
            </CancelButton>

            <CheckoutButton onClick={confirmOrder}>
                Confirm Order
            </CheckoutButton>
        </CheckoutContainer>
    );
};

export default Checkout;

const CheckoutContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-rows: 0.25fr 1fr 0.25fr 0.25fr 0.25fr 0.5fr;
    grid-template-columns: 0.1fr 1fr 0.1fr;
`;
const CheckoutTable = styled.div`
    grid-column: 1 / span 3;

    display: grid;
    grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
    grid-template-columns: 0.1fr 0.4fr 0.1fr 0.4fr;
    column-gap: 20px;
    padding-left: 10px;
`;

const CheckoutHeader = styled.div`
    grid-column: 1 / span 3;
    padding-top: 20px;
`;
const CheckoutHeaderLine = styled.hr`
    grid-column: 1 / span 3;
    margin-bottom: 20px;
    border: 1px solid gray;
`;
const CheckoutTitle = styled.h2`
    grid-column: 1 / span 2;
    padding-bottom: 20px;
`;

const CheckoutAddress = styled.div`
    display: grid;

    grid-template-rows: 0.25fr 0.25fr 0.25fr 0.25fr;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
`;

const CheckoutFormLabel = styled.label`
    justify-self: end;
`;

const CheckoutFormCheckbox = styled.input`
    grid-column: 2 / span 3;
    justify-self: start;
    margin-bottom: 20px;
`;

const BasketTotal = styled.h2`
    grid-column: 1 / span 3;
    justify-self: end;
`;

const CheckoutButton = styled.button`
    border-radius: 8px;
    height: 40px;
    grid-column: 3;
`;

const CancelButton = styled.button`
    border-radius: 8px;
    height: 40px;
    grid-column: 1;
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
