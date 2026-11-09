
import { NavLink } from "react-router";

const footerLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "products" },

    { label: "About", to: "about" },
];

const Footer = () => {
    return (
        <footer className="border-t border-base-300 bg-base-100 text-base-content">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
                <div>
                    <NavLink
                        to="/"
                        className="text-2xl font-bold tracking-tight text-base-content"
                    >
                        AmarDokan
                    </NavLink>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-base-content/70">
                        Find your next favorite in our collection of thoughtfully
                        selected essentials.
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-base-content">
                        Explore
                    </h2>
                    <ul className="mt-4 space-y-3">
                        {footerLinks.map((link) => (
                            <li key={link.label}>
                                <NavLink
                                    to={link.to}
                                    className="text-sm text-base-content/70 transition-colors hover:text-base-content"
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-base-content">
                        Stay in the loop
                    </h2>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-base-content/70">
                        Explore our latest products and find something you love.
                    </p>
                    <NavLink
                        to="/"
                        className="mt-4 inline-flex text-sm font-medium text-base-content underline underline-offset-4 transition-colors hover:text-base-content/70"
                    >
                        Shop now
                    </NavLink>
                </div>
            </div>

            <div className="border-t border-base-300">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-base-content/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>© {new Date().getFullYear()} AmarDokan. All rights reserved.</p>
                    <p>Made for everyday living.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;