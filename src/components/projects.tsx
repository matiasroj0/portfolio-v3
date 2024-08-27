import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of the projects I&apos;ve worked on.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4">
            <Link
              href="https://matiasrojo-advice-generator-app.netlify.app/"
              className="group relative overflow-hidden rounded-lg"
              prefetch={false}
              target="blank"
            >
              <img
                src="/projects/advice-generator2.jpg"
                width="550"
                height="310"
                alt="Advice Generator Image"
                className="mx-auto aspect-video w-full object-cover object-center transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/80 p-4 opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-xl font-bold text-primary-foreground">
                  Advice Generator
                </h3>
                <p className="text-primary-foreground">
                  Provides users with random advice at the click of a button.
                  The app aims to be a quick and easy way for users to receive
                  thoughtful and inspiring advice whenever they need a boost.
                </p>
              </div>
            </Link>
            <Link
              href="https://matiasrojo-age-calculator-app.netlify.app/"
              className="group relative overflow-hidden rounded-lg"
              prefetch={false}
              target="blank"
            >
              <img
                src="/projects/age-calculator.jpg"
                width="550"
                height="310"
                alt="Age Calculator"
                className="mx-auto aspect-video w-full object-cover object-center transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/80 p-4 opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-xl font-bold text-primary-foreground">
                  Age calculator
                </h3>
                <p className="text-primary-foreground">
                  Allows users to easily calculate the time difference between
                  two dates.
                </p>
              </div>
            </Link>
          </div>
          <div className="grid gap-4">
            <Link
              href="https://matiasrojo-loopstudioslandingpage.netlify.app/"
              className="group relative overflow-hidden rounded-lg"
              prefetch={false}
              target="blank"
            >
              <img
                src="/projects/landing-page.jpg"
                width="550"
                height="310"
                alt="Loopstudios Landing Page website design"
                className="mx-auto aspect-video w-full object-cover object-center transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/80 p-4 opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-xl font-bold text-primary-foreground">
                  Landing Page
                </h3>
                <p className="text-primary-foreground">
                  A landing page focused on driving conversions with clear
                  messaging, visuals, and a strong call-to-action.
                </p>
              </div>
            </Link>
            <Link
              href="https://matiasrojo-tip-calculator-app.netlify.app/"
              className="group relative overflow-hidden rounded-lg"
              prefetch={false}
              target="blank"
            >
              <img
                src="/projects/tip-calculator.jpg"
                width="550"
                height="310"
                alt="Tip Calculator Design"
                className="mx-auto aspect-video w-full object-cover object-center transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/80 p-4 opacity-0 transition-all group-hover:opacity-100">
                <h3 className="text-xl font-bold text-primary-foreground">
                  Tip Calculator
                </h3>
                <p className="text-primary-foreground">
                  A tip calculator app quickly calculates the tip amount and
                  total bill based on the user’s input. It allows users to
                  adjust the tip percentage and split the bill among multiple
                  people
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
