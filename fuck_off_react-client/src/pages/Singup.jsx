import { Link } from "react-router";

const Singup = () => {
    return (
        <main className="flex flex-1 items-center justify-center bg-base-200/50 px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
            <section
                aria-labelledby="signup-heading"
                className="grid w-full max-w-5xl overflow-hidden rounded-2xl bg-base-100 shadow-xl md:grid-cols-[0.9fr_1.1fr] lg:rounded-3xl"
            >
                <div className="hidden flex-col justify-between bg-primary p-8 text-primary-content md:flex md:p-9 lg:p-12">
                    <Link to="/" className="text-2xl font-bold tracking-tight">
                        AmarDokan
                    </Link>
                    <div className="py-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
                            Join our community
                        </p>
                        <p className="mt-4 text-4xl font-bold leading-tight">
                            Make everyday shopping yours.
                        </p>
                        <p className="mt-4 max-w-sm leading-7 opacity-80">
                            Create an account and explore thoughtfully picked
                            finds for everyday living.
                        </p>
                    </div>
                    <p className="text-sm opacity-70">
                        Welcome to AmarDokan.
                    </p>
                </div>

                <div className="w-full p-6 sm:p-9 md:p-10 lg:p-14">
                    <div className="mb-10 text-center md:text-left">
                        <Link
                            to="/"
                            className="text-lg font-bold tracking-tight text-primary md:hidden"
                        >
                            AmarDokan
                        </Link>
                        <h1
                            id="signup-heading"
                            className="mt-3 text-3xl font-bold tracking-tight text-base-content sm:text-4xl"
                        >
                            Create your account
                        </h1>
                        <p className="mt-2 text-sm leading-6 text-base-content/70">
                            Enter your details to get started.
                        </p>
                    </div>

                    <form
                        className="space-y-8"
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <label className="form-control w-full gap-4">
                            <span className="label-text block font-medium text-base-content">
                                Full name
                            </span>
                            <input
                                type="text"
                                name="name"
                                autoComplete="name"
                                placeholder="Your name"
                                className="input input-bordered h-12 w-full focus:outline-primary"
                                required
                            />
                        </label>

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
                                autoComplete="new-password"
                                placeholder="At least 8 characters"
                                minLength={8}
                                className="input input-bordered h-12 w-full focus:outline-primary"
                                required
                            />
                        </label>

                        <label className="form-control w-full gap-4">
                            <span className="label-text block font-medium text-base-content">
                                Confirm password
                            </span>
                            <input
                                type="password"
                                name="confirmPassword"
                                autoComplete="new-password"
                                placeholder="Enter your password again"
                                minLength={8}
                                className="input input-bordered h-12 w-full focus:outline-primary"
                                required
                            />
                        </label>

                        <button type="submit" className="btn btn-primary mt-2 h-12 w-full">
                            Create account
                        </button>
                    </form>

                    <p className="mt-10 text-center text-sm text-base-content/70">
                        Already have an account?{" "}
                        <Link to="/login" className="link link-primary font-semibold">
                            Sign in
                        </Link>
                    </p>
                    <p className="mt-6 text-center text-xs leading-5 text-base-content/50">
                        Sign-up is a visual demo; account creation is not connected.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Singup;