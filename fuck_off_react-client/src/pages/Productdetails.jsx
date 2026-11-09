import { useRef, useState } from "react";
import { Link, useParams } from "react-router";
import products from "../data/products";
import useCart from "../context/useCart";

const demoReviews = [
    {
        id: "demo-1",
        name: "Samira A.",
        rating: 5,
        comment: "Looks great and feels even better. A lovely everyday pick.",
    },
    {
        id: "demo-2",
        name: "Rafi K.",
        rating: 4,
        comment: "Good quality for the price. I would happily recommend it.",
    },
];

const Productdetails = () => {
    const { productId } = useParams();
    const product = products.find((item) => item.id === productId);
    const { addToCart } = useCart();
    const [quantitySelection, setQuantitySelection] = useState({
        productId,
        quantity: 1,
    });
    const [imageSelection, setImageSelection] = useState({
        productId,
        image: product?.image,
    });
    const quantity = quantitySelection.productId === productId
        ? quantitySelection.quantity
        : 1;
    const selectedImage = imageSelection.productId === productId
        ? imageSelection.image
        : product?.image;
    const imageFrameRef = useRef(null);
    const productImageRef = useRef(null);
    const setQuantity = (update) => {
        setQuantitySelection((currentSelection) => ({
            productId,
            quantity: typeof update === "function"
                ? update(currentSelection.productId === productId ? currentSelection.quantity : 1)
                : update,
        }));
    };
    const setSelectedImage = (image) => {
        setImageSelection({ productId, image });
    };

    const followCursor = (event) => {
        const frame = imageFrameRef.current;
        const image = productImageRef.current;
        if (!frame || !image) return;

        const bounds = frame.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 100;
        const y = ((event.clientY - bounds.top) / bounds.height) * 100;
        image.style.transformOrigin = `${x}% ${y}%`;
    };

    const resetImageZoom = () => {
        if (productImageRef.current) {
            productImageRef.current.style.transformOrigin = "center";
        }
    };

    if (!product) {
        return (
            <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-base-content">
                    Product not found
                </h1>
                <p className="mt-3 text-base-content/70">
                    This product may have been removed or the link may be incorrect.
                </p>
                <Link to="/products" className="btn btn-primary mt-6">
                    Browse products
                </Link>
            </section>
        );
    }

    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
            <Link
                to="/products"
                className="link link-hover text-sm text-base-content/70"
            >
                ← Back to products
            </Link>

            <article className="mt-6 bg-base-100">
                <div className="grid items-start gap-x-10 gap-y-6 md:grid-cols-2">
                    <figure
                        ref={imageFrameRef}
                        onMouseMove={followCursor}
                        onMouseLeave={resetImageZoom}
                        className="group aspect-square min-h-72 cursor-zoom-in overflow-hidden bg-base-200 md:min-h-[30rem]"
                    >
                        <img
                            ref={productImageRef}
                            src={selectedImage}
                            alt={selectedImage === product.sideImage ? `${product.name}, alternate view` : product.imageAlt}
                            className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-150 motion-reduce:transition-none"
                        />
                    </figure>
                    <div className="flex gap-3 md:col-start-1">
                        {[product.image, product.sideImage].filter(Boolean).map((image, index) => (
                            <button
                                key={image}
                                type="button"
                                aria-label={`Show ${index === 0 ? "main" : "alternate"} view of ${product.name}`}
                                aria-pressed={selectedImage === image}
                                onClick={() => setSelectedImage(image)}
                                className={`h-20 w-20 overflow-hidden rounded-lg ${
                                    selectedImage === image
                                        ? "ring-2 ring-primary ring-offset-2 ring-offset-base-100"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                            >
                                <img
                                    src={image}
                                    alt=""
                                    className="h-full w-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col items-start p-1 sm:p-2 md:col-start-2 md:row-span-2 md:row-start-1">
                        <span className="badge badge-primary badge-outline">
                            {product.category}
                        </span>
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                            {product.name}
                        </h1>

                        <div className="mt-5">
                            <h2 className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
                                Short description
                            </h2>
                            <p className="mt-2 text-base leading-7 text-base-content/80">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-5">
                            <h2 className="text-sm font-semibold uppercase tracking-wide text-base-content/60">
                                Product details
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-base-content/70">
                                {product.longDescription}
                            </p>
                        </div>

                        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                            <p
                                className="text-3xl font-bold text-primary"
                                aria-label={`Price: ${product.price.toLocaleString("en-BD")} taka`}
                            >
                                ৳{product.price.toLocaleString("en-BD")}
                            </p>
                            <div className="flex items-center gap-2">
                                <span
                                    className="text-lg tracking-wider text-warning"
                                    role="img"
                                    aria-label="4.5 out of 5 stars"
                                >
                                    ★★★★☆
                                </span>
                                <span className="text-sm font-medium text-base-content/70">
                                    4.5 out of 5
                                </span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="product-quantity"
                                className="mb-2 block text-sm font-medium text-base-content"
                            >
                                Quantity
                            </label>
                            <div className="flex">
                                <button
                                    type="button"
                                    className="btn rounded-r-none border-r-0"
                                    aria-label="Decrease quantity"
                                    disabled={quantity <= 1}
                                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                                >
                                    −
                                </button>
                                <input
                                    id="product-quantity"
                                    type="number"
                                    min="1"
                                    max="99"
                                    value={quantity}
                                    onChange={(event) => {
                                        const nextQuantity = Number(event.target.value);
                                        if (Number.isInteger(nextQuantity) && nextQuantity >= 1 && nextQuantity <= 99) {
                                            setQuantity(nextQuantity);
                                        }
                                    }}
                                    className="input w-20 rounded-none text-center"
                                />
                                <button
                                    type="button"
                                    className="btn rounded-l-none border-l-0"
                                    aria-label="Increase quantity"
                                    disabled={quantity >= 99}
                                    onClick={() => setQuantity((current) => Math.min(99, current + 1))}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
                            <button
                                type="button"
                                className="btn btn-primary flex-1"
                                onClick={() => addToCart(product, "buy", quantity)}
                            >
                                Buy now
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline btn-primary flex-1"
                                onClick={() => addToCart(product, "cart", quantity)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>

                <section
                    aria-labelledby="reviews-heading"
                    className="mt-12 pt-8"
                >
                    <div className="flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <h2
                                id="reviews-heading"
                                className="text-2xl font-bold text-base-content"
                            >
                                Customer ratings & comments
                            </h2>
                            <p className="mt-1 text-sm text-base-content/60">
                                Sample reviews for display purposes.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span
                                className="text-xl tracking-wider text-warning"
                                role="img"
                                aria-label="4.5 out of 5 stars"
                            >
                                ★★★★☆
                            </span>
                            <span className="font-semibold text-base-content">
                                4.5
                            </span>
                        </div>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {demoReviews.map((review) => (
                            <article
                                key={review.id}
                                className="rounded-xl bg-base-200/50 p-4"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="font-semibold text-base-content">
                                        {review.name}
                                    </h3>
                                    <span
                                        className="text-sm tracking-wider text-warning"
                                        aria-label={`${review.rating} out of 5 stars`}
                                    >
                                        {"★".repeat(review.rating)}
                                        {"☆".repeat(5 - review.rating)}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm leading-6 text-base-content/70">
                                    {review.comment}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>
            </article>
        </section>
    );
};

export default Productdetails;
