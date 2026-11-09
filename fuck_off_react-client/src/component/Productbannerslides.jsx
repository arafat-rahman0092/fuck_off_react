import { useState } from "react";
import { Link } from "react-router";
import products from "../data/products";

const slides = products.slice(0, 4);

const Productbannerslides = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const product = slides[activeIndex];

    const showSlide = (index) => {
        setActiveIndex((index + slides.length) % slides.length);
    };

    if (!product) return null;

    return (
        <section
            aria-label="Featured products"
            aria-roledescription="carousel"
            className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8"
        >
            <div className="relative overflow-hidden rounded-2xl border border-sky-300 bg-base-200 shadow-sm">
                <div
                    key={product.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${activeIndex + 1} of ${slides.length}: ${product.name}`}
                    className="grid min-h-[25rem] md:min-h-[30rem] md:grid-cols-2"
                >
                    <div className="flex flex-col items-start justify-center px-8 py-10 sm:px-12 lg:px-16">
                        <span className="badge badge-primary badge-outline">
                            Featured · {product.category}
                        </span>
                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            AmarDokan collection
                        </p>
                        <h1 className="mt-3 max-w-lg text-4xl font-black leading-tight tracking-tight text-base-content sm:text-5xl">
                            {product.name}
                        </h1>
                        <p className="mt-4 max-w-md text-base leading-7 text-base-content/70">
                            {product.description}
                        </p>
                        <p
                            className="mt-6 text-2xl font-bold text-primary"
                            aria-label={`Price: ${product.price.toLocaleString("en-BD")} taka`}
                        >
                            ৳{product.price.toLocaleString("en-BD")}
                        </p>
                        <Link to="/products" className="btn btn-primary mt-6">
                            Explore products
                        </Link>
                    </div>

                    <div className="relative min-h-64 bg-base-300 md:min-h-full">
                        <img
                            src={product.image}
                            alt={product.imageAlt}
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                </div>

                <button
                    type="button"
                    aria-label="Previous featured product"
                    onClick={() => showSlide(activeIndex - 1)}
                    className="btn btn-circle absolute left-3 top-1/2 -translate-y-1/2 border-base-300 bg-base-100/95 text-base-content shadow-md sm:left-5"
                >
                    <span aria-hidden="true">‹</span>
                </button>
                <button
                    type="button"
                    aria-label="Next featured product"
                    onClick={() => showSlide(activeIndex + 1)}
                    className="btn btn-circle absolute right-3 top-1/2 -translate-y-1/2 border-base-300 bg-base-100/95 text-base-content shadow-md sm:right-5"
                >
                    <span aria-hidden="true">›</span>
                </button>
            </div>

            <div className="mt-4 flex justify-center gap-2" aria-label="Choose featured product">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        aria-label={`Show slide ${index + 1}: ${slide.name}`}
                        aria-current={index === activeIndex ? "true" : undefined}
                        onClick={() => showSlide(index)}
                        className={`h-2.5 rounded-full transition-[width,background-color] ${
                            index === activeIndex
                                ? "w-8 bg-primary"
                                : "w-2.5 bg-base-content/30 hover:bg-base-content/60"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Productbannerslides;
