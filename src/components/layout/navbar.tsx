import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { Button } from "@components/basic/button";
import { Logo } from "@components/basic/logo";
import { ThemeToggle } from "@components/basic/theme-toggle";
import { DOCS_URL, GITHUB_URL, MANIFESTO_URL } from "@constants/urls";

import { Container } from "./container";
import { MobileMenu } from "./mobile-menu";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="relative">
      <Container className="flex h-20 w-full items-center justify-between gap-4">
        <Logo className="hidden md:block" />
        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <nav className="hidden gap-4 md:flex">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-focus"
            >
              GitHub
            </a>
            <a
              href={MANIFESTO_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-focus"
            >
              Manifesto
            </a>
          </nav>
          <a href={DOCS_URL} target="_blank" rel="noreferrer">
            <Button>Start building</Button>
          </a>

          <button
            onClick={() => setShowMenu((show) => !show)}
            className="rounded-btn p-1.5 hover:bg-base-200 md:hidden"
            aria-expanded="false"
          >
            <span className="sr-only">
              {showMenu ? "Close menu" : "Open menu"}
            </span>
            {showMenu ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <MobileMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        className="md:hidden"
      />
    </header>
  );
};
