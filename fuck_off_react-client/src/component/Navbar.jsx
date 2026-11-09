import {  useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { NavLink } from "react-router";
import useCart from "../context/useCart";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "products" },
    
    { label: "About", href: "about" },
];



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();


    return (
        <header className="w-full border-b border-base-300 bg-base-100 text-base-content">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 px-4 py-4 sm:px-6 lg:px-8"
            >
                <NavLink
                    to="/"
                    className="shrink-0 text-2xl font-bold tracking-tight text-base-content"
                >
                    AmarDokan
                </NavLink>

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.href}
                            className="text-sm font-medium text-base-content/70 transition-colors hover:text-base-content"
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                <div className="ml-auto flex items-center gap-2 md:ml-0">
                    
                    <NavLink
                        to="/cart"
                        aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? "item" : "items"}`}
                        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-base-content/80 transition-colors hover:bg-base-200 hover:text-base-content"
                    >
                        <span className="relative inline-flex">
                            <FiShoppingCart aria-hidden="true" className="h-5 w-5" />
                            {cartCount > 0 && (
                                <span className="badge badge-primary badge-xs absolute -right-2 -top-2">
                                    {cartCount}
                                </span>
                            )}
                        </span>
                        <span className="hidden sm:inline">Cart</span>
                    </NavLink>
                    <NavLink
                        to="/login"
                        className="btn btn-primary btn-sm"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/signup"
                        className="btn btn-outline btn-primary btn-sm hidden sm:inline-flex"
                    >
                        Signup
                    </NavLink>
                    <button
                        type="button"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen((isOpen) => !isOpen)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-base-content/80 transition-colors hover:bg-base-200 hover:text-base-content md:hidden"
                    >
                        {menuOpen ? (
                            <FiX aria-hidden="true" className="h-5 w-5" />
                        ) : (
                            <FiMenu aria-hidden="true" className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {menuOpen && (
                    <div id="mobile-navigation" className="basis-full md:hidden">
                        <div className="flex flex-col gap-1 border-t border-base-300 pt-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.label}
                                    to={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-base-content/80 transition-colors hover:bg-base-200 hover:text-base-content"
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <NavLink
                                to="/login"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-md px-3 py-2 text-sm font-medium text-base-content/80 transition-colors hover:bg-base-200 hover:text-base-content"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/signup"
                                onClick={() => setMenuOpen(false)}
                                className="rounded-md px-3 py-2 text-sm font-medium text-base-content/80 transition-colors hover:bg-base-200 hover:text-base-content"
                            >
                                Signup
                            </NavLink>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
