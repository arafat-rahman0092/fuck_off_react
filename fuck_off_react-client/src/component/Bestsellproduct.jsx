import Productcard from "./Productcard";
import products from "../data/products";

const bestSellers = products.filter((product) => product.bestSeller);

const Bestsellproduct = () => {
    return (
        <section
            aria-labelledby="best-sellers-heading"
            className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Customer favorites
                </p>
                <h2
                    id="best-sellers-heading"
                    className="mt-2 text-3xl font-bold tracking-tight text-base-content sm:text-4xl"
                >
                    Best sellers
                </h2>
                <p className="mt-2 text-base text-base-content/70">
                    Popular picks worth adding to your everyday.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {bestSellers.map((product) => (
                    <Productcard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Bestsellproduct;
