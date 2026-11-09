
const About = () => {
    return (
        <main className="mx-auto w-full max-w-5xl px-4 py-12 text-base-content sm:px-6 sm:py-16">
            <header className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    About AmarDokan
                </p>
                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                    Lorem ipsum dolor sit amet.
                </h1>
                <p className="mt-5 text-lg leading-8 text-base-content/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vitae neque at nunc volutpat facilisis. Integer
                    posuere, lectus sed tristique consequat, justo sapien
                    tincidunt nisl, sed feugiat erat ipsum vitae magna.
                </p>
            </header>

            <section aria-labelledby="about-heading" className="mt-14">
                <h2 id="about-heading" className="text-2xl font-bold">
                    Lorem ipsum dolor sit amet
                </h2>
                <p className="mt-4 max-w-3xl leading-7 text-base-content/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget tortor sed sapien blandit malesuada. Donec
                    interdum, velit vitae posuere consequat, justo erat
                    facilisis lectus, at tincidunt purus erat sed arcu.
                    Suspendisse potenti. Aenean sed magna vitae nibh pretium
                    hendrerit.
                </p>
            </section>

            <section
                aria-labelledby="terms-heading"
                className="mt-14 border-t border-base-300 pt-10"
            >
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                    Please read
                </p>
                <h2 id="terms-heading" className="mt-2 text-3xl font-bold">
                    Terms &amp; Conditions
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-base-content/70">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc consectetur, arcu vitae commodo tincidunt, lorem
                    libero consequat velit, non tincidunt ligula erat at
                    sapien.
                </p>

                <div className="mt-8 space-y-8">
                    <section>
                        <h3 className="text-lg font-semibold">Using this website</h3>
                        <p className="mt-2 leading-7 text-base-content/70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam aliquet, velit sed tincidunt consequat,
                            lectus justo aliquam justo, vitae tempor dui nibh
                            eget neque. Curabitur a lectus vitae erat cursus
                            malesuada.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold">Product information</h3>
                        <p className="mt-2 leading-7 text-base-content/70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed vitae consequat nunc. Duis efficitur
                            pharetra sem, a sollicitudin urna interdum vitae.
                            Mauris ut justo at lectus consequat posuere.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold">Orders and pricing</h3>
                        <p className="mt-2 leading-7 text-base-content/70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer sed tortor nec mi feugiat facilisis.
                            Donec maximus ligula sit amet risus tristique, at
                            consequat enim mattis. Aliquam erat volutpat.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold">Reviews and comments</h3>
                        <p className="mt-2 leading-7 text-base-content/70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Cras imperdiet, nisi ac malesuada tincidunt,
                            massa libero viverra est, in consequat augue lorem
                            id justo. Morbi vel tellus non augue luctus
                            sollicitudin.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold">Changes to these terms</h3>
                        <p className="mt-2 leading-7 text-base-content/70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum ante ipsum primis in faucibus orci
                            luctus et ultrices posuere cubilia curae; Nam
                            tincidunt nunc id nisi blandit, non vulputate
                            tortor varius.
                        </p>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default About;