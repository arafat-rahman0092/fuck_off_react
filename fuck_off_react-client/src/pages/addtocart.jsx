import { Link } from "react-router";
import useCart from "../context/useCart";

const formatPrice = (price) => `৳${price.toLocaleString("en-BD")}`;

const AddToCart = () => {
    const {
        cartItems,
        cartCount,
        subtotal,
        updateQuantity,
        removeFromCart,
        clearCart,
        setToast,
    } = useCart();

    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        AmarDokan
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                        Your cart
                    </h1>
                </div>
                {cartItems.length > 0 && (
                    <button
                        type="button"
                        className="btn btn-ghost btn-sm text-error"
                        onClick={clearCart}
                    >
                        Clear cart
                    </button>
                )}
            </header>

            {cartItems.length === 0 ? (
                <section className="rounded-2xl bg-base-200/60 px-6 py-14 text-center sm:py-20">
                    <div className="text-5xl" aria-hidden="true">🛒</div>
                    <h2 className="mt-5 text-2xl font-semibold text-base-content">
                        Your cart is empty
                    </h2>
                    <p className="mt-2 text-base-content/70">
                        Browse the collection and add something you love.
                    </p>
                    <Link to="/products" className="btn btn-primary mt-6">
                        Browse products
                    </Link>
                </section>
            ) : (
                <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
                    <section aria-label="Cart items" className="space-y-4">
                        <p className="text-sm text-base-content/60">
                            {cartCount} {cartCount === 1 ? "item" : "items"}
                        </p>
                        {cartItems.map(({ product, quantity }) => (
                            <article
                                key={product.id}
                                className="grid gap-4 rounded-2xl bg-base-200/50 p-4 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:items-center sm:p-5"
                            >
                                <Link
                                    to={`/products/${product.id}`}
                                    aria-label={`View ${product.name}`}
                                    className="overflow-hidden rounded-xl bg-base-200"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.imageAlt}
                                        className="aspect-square w-full object-cover"
                                    />
                                </Link>

                                <div className="min-w-0">
                                    <p className="text-xs font-medium uppercase tracking-wide text-base-content/60">
                                        {product.category}
                                    </p>
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="mt-1 inline-block text-lg font-semibold text-base-content hover:text-primary"
                                    >
                                        {product.name}
                                    </Link>
                                    <p className="mt-1 text-sm text-base-content/70">
                                        {formatPrice(product.price)} each
                                    </p>
                                    <button
                                        type="button"
                                        className="mt-3 text-sm text-error hover:underline"
                                        onClick={() => removeFromCart(product.id)}
                                    >
                                        Remove
                                    </button>
                                </div>

                                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                                    <label className="flex items-center gap-2 text-sm text-base-content/70">
                                        <span>Qty</span>
                                        <input
                                            type="number"
                                            min="1"
                                            max="99"
                                            value={quantity}
                                            aria-label={`Quantity for ${product.name}`}
                                            onChange={(event) => {
                                                const nextQuantity = Number(event.target.value);
                                                if (Number.isInteger(nextQuantity) && nextQuantity >= 1 && nextQuantity <= 99) {
                                                    updateQuantity(product.id, nextQuantity);
                                                }
                                            }}
                                            className="input input-bordered input-sm w-20 text-center"
                                        />
                                    </label>
                                    <p className="font-bold text-base-content">
                                        {formatPrice(product.price * quantity)}
                                    </p>
                                </div>
                            </article>
                        ))}

                        <Link to="/products" className="btn btn-ghost mt-2">
                            ← Continue shopping
                        </Link>
                    </section>

                    <aside className="rounded-2xl bg-base-200/60 p-5 sm:p-6">
                        <h2 className="text-xl font-semibold text-base-content">
                            Order summary
                        </h2>
                        <div className="mt-5 flex justify-between gap-4 text-sm">
                            <span className="text-base-content/70">Subtotal</span>
                            <span className="font-semibold text-base-content">
                                {formatPrice(subtotal)}
                            </span>
                        </div>
                        <p className="mt-3 text-xs leading-5 text-base-content/60">
                            Shipping and any applicable fees are calculated at checkout.
                        </p>
                        <div className="my-5 border-t border-base-300" />
                        <div className="flex justify-between gap-4">
                            <span className="font-semibold text-base-content">Total</span>
                            <span className="text-lg font-bold text-primary">
                                {formatPrice(subtotal)}
                            </span>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary mt-6 w-full"
                            onClick={() => setToast("Checkout is not connected yet.")}
                        >
                            Proceed to checkout
                        </button>
                        <p className="mt-3 text-center text-xs text-base-content/50">
                            Checkout is a demo and is not connected to payment.
                        </p>
                    </aside>
                </div>
            )}
        </section>
    );
};

export default AddToCart;
