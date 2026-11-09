

import { Link } from "react-router";

const Login = () => {
    return (
        <main className="flex flex-1 items-center justify-center bg-base-200/50 px-4 py-10 sm:px-6 sm:py-16">
            <section
                aria-labelledby="login-heading"
                className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-xl md:grid-cols-2"
            >
                <div className="hidden flex-col justify-between bg-primary p-10 text-primary-content md:flex lg:p-14">
                    <Link to="/" className="text-2xl font-bold tracking-tight">
                        AmarDokan
                    </Link>
                    <div className="py-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
                            Welcome to AmarDokan
                        </p>
                        <p className="mt-4 text-4xl font-bold leading-tight">
                            Everyday finds, thoughtfully picked.
                        </p>
                        <p className="mt-4 max-w-sm leading-7 opacity-80">
                            Sign in to continue exploring a collection made for
                            everyday living.
                        </p>
                    </div>
                    <p className="text-sm opacity-70">
                        Shop your way, every day.
                    </p>
                </div>

                <div className="w-full p-6 sm:p-10 lg:p-14">
                    <div className="mb-10 text-center md:text-left">
                        <Link
                            to="/"
                            className="text-lg font-bold tracking-tight text-primary md:hidden"
                        >
                            AmarDokan
                        </Link>
                        <h1
                            id="login-heading"
                            className="mt-3 text-3xl font-bold tracking-tight text-base-content sm:text-4xl"
                        >
                            Welcome back
                        </h1>
                        <p className="mt-2 text-sm leading-6 text-base-content/70">
                            Sign in to your account to continue.
                        </p>
                    </div>

                    <form
                        className="space-y-8"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <label className="form-control w-full gap-4">
                            <span className="label-text block font-medium text-base-content">
                                Email address
                            </span>
                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                className="input input-bordered h-12 w-full focus:outline-primary"
                                required
                            />
                        </label>

                        <label className="form-control w-full gap-4">
                            <span className="label-text block font-medium text-base-content">
                                Password
                            </span>
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="input input-bordered h-12 w-full focus:outline-primary"
                                required
                            />
                        </label>

                        <button type="submit" className="btn btn-primary mt-2 h-12 w-full">
                            Sign in
                        </button>
                    </form>

                    <div className="mt-10">
                        <p className="mb-4 text-center text-sm text-base-content/70">
                            New to AmarDokan?
                        </p>
                        <Link
                            to="/signup"
                            className="btn btn-outline btn-primary h-12 w-full"
                        >
                            Create an account
                        </Link>
                    </div>
                    <p className="mt-6 text-center text-xs leading-5 text-base-content/50">
                        Sign-in is a visual demo; authentication is not connected.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Login;