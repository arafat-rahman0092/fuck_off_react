
import useCart from "../context/useCart";
import { Link } from "react-router";

const Productcard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <article className="product-card card h-full overflow-hidden border border-sky-300 bg-base-100 shadow-sm">
            <Link
                to={`/products/${product.id}`}
                className="block"
                aria-label={`View details for ${product.name}`}
            >
                <figure className="aspect-[4/3] bg-base-200">
                    <img
                        src={product.image}
                        alt={product.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </figure>
                <div className="card-body gap-3 p-5 pb-3">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-base-content/60">
                            {product.category}
                        </p>
                        <h2 className="card-title mt-1 text-lg text-base-content">
                            {product.name}
                        </h2>
                    </div>
                    <p className="text-sm leading-6 text-base-content/70">
                        {product.description}
                    </p>
                    <p
                        className="border-t border-base-300 pt-3 text-xl font-bold text-primary"
                        aria-label={`Price: ${product.price.toLocaleString("en-BD")} taka`}
                    >
                        ৳{product.price.toLocaleString("en-BD")}
                    </p>
                </div>
            </Link>
            <div className="card-body mt-auto pt-2">
                <div className="card-actions grid grid-cols-2">
                    <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={() => addToCart(product, "buy")}
                    >
                        Buy now
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline btn-primary btn-sm"
                        onClick={() => addToCart(product)}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    );
};

export default Productcard;