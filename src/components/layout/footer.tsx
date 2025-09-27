import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Bird, Camera, ThumbsUp } from "lucide-react";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="lg:max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8">
          {/* Brand + blurb + socials */}
          <div>
            <Link href="/" className="inline-flex items-baseline">
              <span className="font-display font-extralight text-2xl">
                IN_SHOP–NIA
              </span>
            </Link>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Build, sell, and scale your shop with a modern stack. Clean
              design, fast performance, and a delightful experience for your
              customers.
            </p>
            <div className="flex gap-2 mt-5">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
              >
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Code2 className="size-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
              >
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Bird className="size-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
              >
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Camera className="size-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 transition-colors"
              >
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <ThumbsUp className="size-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-6">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Stay in the loop
            </h3>
            <p className="text-muted-foreground text-sm mt-4">
              Subscribe to product news, guides, and occasional offers. No spam.
            </p>
            {/* <form
              className="mt-4 flex gap-2 max-w-md"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                type="email"
                required
                placeholder="Enter your email"
                className="h-10"
              />
              <Button className="h-10 rounded-md" type="submit">
                Subscribe
              </Button>
            </form> */}
          </div>
        </div>

        <div className="border-t py-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} IN_SHOP–NIA. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
