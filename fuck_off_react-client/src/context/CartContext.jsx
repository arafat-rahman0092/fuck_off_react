import { useEffect, useState } from "react";
import CartContext from "./cartContext";

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [toast, setToast] = useState("");
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    const subtotal = cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0,
    );

    useEffect(() => {
        if (!toast) return undefined;

        const timeoutId = window.setTimeout(() => setToast(""), 3000);
        return () => window.clearTimeout(timeoutId);
    }, [toast]);

    const addToCart = (product, intent = "cart", quantity = 1) => {
        setCartItems((items) => {
            const existingItem = items.find((item) => item.product.id === product.id);
            if (existingItem) {
                return items.map((item) => item.product.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item);
            }

            return [...items, { product, quantity }];
        });
        setToast(
            intent === "buy"
                ? `${quantity} × ${product.name} added to cart — ready to buy.`
                : `${quantity} × ${product.name} added to cart.`,
        );
    };

    const updateQuantity = (productId, quantity) => {
        if (!Number.isInteger(quantity) || quantity < 1 || quantity > 99) return;
        setCartItems((items) => items.map((item) => item.product.id === productId
            ? { ...item, quantity }
            : item));
    };

    const removeFromCart = (productId) => {
        setCartItems((items) => items.filter((item) => item.product.id !== productId));
        setToast("Product removed from cart.");
    };

    const clearCart = () => {
        setCartItems([]);
        setToast("Cart cleared.");
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                subtotal,
                addToCart,
                updateQuantity,
                removeFromCart,
                clearCart,
                setToast,
            }}
        >
            {children}
            {toast && (
                <div className="toast toast-top toast-center z-50">
                    <div className="alert alert-success shadow-lg" role="status">
                        <span>{toast}</span>
                    </div>
                </div>
            )}
        </CartContext.Provider>
    );
};
