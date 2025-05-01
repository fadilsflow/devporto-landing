// Server Component
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronRight, Copy, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-togggle";
import { CopyButton } from "@/components/copy-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <Header />
        <Hero />
        <Feature />
      </main>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold ">
          Devporto
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/yourorg/devporto"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Star className="h-4 w-4" />
            <span>25K</span>
          </Link>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link
                href="https://github.com/yourorg/devporto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={15}
                  height={15}
                  className="dark:invert"
                />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>

            <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world">
              <img src="https://vercel.com/button" alt="Deploy with Vercel" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  const command = "bun create devporto";

  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <div className="flex flex-col gap-6">
          <Badge className="rounded-full w-fit px-4 py-1 " variant="outline">
            Build your portfolio website in minutes :D
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-medium text-muted-foreground tracking-tight">
            The best way to build your{" "}
            <span className="text-foreground">Developer profiles</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md">
            Create beautiful, responsive, and customizable portfolio websites
            with just a few clicks.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button asChild className="rounded-full">
              <Link href="/docs">
                Documentation <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button variant="outline" asChild className="rounded-full">
              <a
                href="https://fadils.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="border rounded-lg overflow-hidden mt-4 max-w-sm">
            <div className="flex justify-between items-center p-3 bg-card">
              <code className="text-sm font-mono">{command}</code>
              <CopyButton text={command} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            No need to worry about the design, we&apos;ve got you covered.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative border rounded-lg overflow-hidden shadow-md bg-card">
          <div className="aspect-video relative">
            <Image
              src="/github.svg"
              alt="Devporto Preview"
              fill
              className="object-cover dark:invert p-8"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  // Server-side year generation
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>Built by</span>
          <Link
            href="https://fadils.xyz"
            className="font-medium hover:text-foreground transition-colors"
          >
            fadils
          </Link>
          <span>&copy; {currentYear}</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </Link>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
};

const Feature = () => {
  const features = [
    {
      title: "Beautiful Design",
      description:
        "A beautiful and responsive design that is easy to customize.",
      icon: <Image src="/github.svg" alt="GitHub" width={24} height={24} />,
    },
    {
      title: "Beautiful g",
      description:
        "A beautiful and responsive design that is easy to customize.",
      icon: <Image src="/github.svg" alt="GitHub" width={24} height={24} />,
    },
    {
      title: "Beautiful Desixgn",
      description:
        "A beautiful and responsive design that is easy to customize.",
      icon: <Image src="/github.svg" alt="GitHub" width={24} height={24} />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-6xl font-medium ">
        Everything you need <br />
        to showcase your developer journey
      </h2>
      <p className="text-muted-foreground">
        Show off your skills and projects with a custom developer profile.
        Follow these simple steps to get started.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col  border p-4 rounded-lg"
          >
            {feature.icon}
            <h3 className="text-lg font-medium">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
