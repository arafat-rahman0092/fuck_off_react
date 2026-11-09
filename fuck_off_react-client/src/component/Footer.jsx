
import { NavLink } from "react-router";

const footerLinks = [
    { label: "Home", to: "home" },
    { label: "Products", to: "shop" },
    { label: "Collections", to: "collections" },
    { label: "About", to: "about" },
];

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
                <div>
                    <NavLink
                        to="/"
                        className="text-2xl font-bold tracking-tight text-gray-900"
                    >
                        AmarDokan
                    </NavLink>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
                        Find your next favorite in our collection of thoughtfully
                        selected essentials.
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-gray-900">
                        Explore
                    </h2>
                    <ul className="mt-4 space-y-3">
                        {footerLinks.map((link) => (
                            <li key={link.label}>
                                <NavLink
                                    to={link.to}
                                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-gray-900">
                        Stay in the loop
                    </h2>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-gray-600">
                        Explore our latest products and find something you love.
                    </p>
                    <NavLink
                        to="shop"
                        className="mt-4 inline-flex text-sm font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-gray-600"
                    >
                        Shop now
                    </NavLink>
                </div>
            </div>

            <div className="border-t border-gray-200">
                <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-sm text-gray-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>© {new Date().getFullYear()} AmarDokan. All rights reserved.</p>
                    <p>Made for everyday living.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;