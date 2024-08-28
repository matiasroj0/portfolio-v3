import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            About Me
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Matias <span className="text-secondary">Rojo</span>
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I&apos;m a passionate web developer with a focus on creating
            beautiful and functional websites. I have experience working with a
            variety of technologies and enjoy tackling new challenges.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Email Me
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/profile-picture.png"
            width="400"
            height="400"
            alt="John Doe"
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
