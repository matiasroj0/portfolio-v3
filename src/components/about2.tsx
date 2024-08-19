import Link from "next/link";

const About2 = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12 md:py-16 lg:py-20">
      <div className="grid gap-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
        <p className="max-w-[600px] text-muted-foreground">
          Hi, I'm John Doe, a passionate web developer with a keen eye for
          design. I love crafting beautiful and functional websites that deliver
          exceptional user experiences.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Link
          href="mailto:matiasrojo011@gmail.com"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Email Me
        </Link>
        <Link
          href="https://www.linkedin.com/in/rojomatias/"
          className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
          target="blank"
        >
          LinkedIn
        </Link>
      </div>
    </section>
  );
};

export default About2;
