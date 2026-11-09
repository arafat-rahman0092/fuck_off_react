import { useState } from "react";
import Productcard from "../component/Productcard";
import products from "../data/products";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const categories = [...new Set(products.map((product) => product.category))];
    const visibleProducts = selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);

    return (
        <section
            aria-labelledby="products-heading"
            className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
        >
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                        AmarDokan collection
                    </p>
                    <h1
                        id="products-heading"
                        className="mt-2 text-3xl font-bold tracking-tight text-base-content sm:text-4xl"
                    >
                        All products
                    </h1>
                    <p className="mt-2 text-base text-base-content/70">
                        Find something you’ll love for every day.
                    </p>
                </div>

                <label className="form-control w-full max-w-xs">
                    <span className="label-text mb-2 font-medium text-base-content">
                        Browse by category
                    </span>
                    <select
                        className="select select-bordered w-full"
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        <option value="All">All categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <p className="mb-5 text-sm text-base-content/60" aria-live="polite">
                Showing {visibleProducts.length}{" "}
                {visibleProducts.length === 1 ? "product" : "products"}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {visibleProducts.map((product) => (
                    <Productcard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Products;