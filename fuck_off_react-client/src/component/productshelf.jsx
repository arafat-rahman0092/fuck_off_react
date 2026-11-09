import Productcard from "./Productcard";
import products from "../data/products";

const featuredProducts = products.filter((product) => !product.bestSeller);

const ProductShelf = () => {
    return (
        <section
            aria-labelledby="product-shelf-heading"
            className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        AmarDokan picks
                    </p>
                    <h2
                        id="product-shelf-heading"
                        className="mt-2 text-3xl font-bold tracking-tight text-base-content sm:text-4xl"
                    >
                        Shop our collection
                    </h2>
                    <p className="mt-2 text-base text-base-content/70">
                        Everyday finds, thoughtfully picked for you.
                    </p>
                </div>
                <p className="text-sm text-base-content/60">
                    {featuredProducts.length} products
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                    <Productcard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductShelf;
