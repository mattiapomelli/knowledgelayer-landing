import { Button } from "@components/basic/button";
import { Logo } from "@components/basic/logo";
import { ThemeToggle } from "@components/basic/theme-toggle";

import { Container } from "./container";

export const Navbar = () => {
  return (
    <header className="flex h-20 items-center">
      <Container className="flex w-full items-center justify-between">
        <Logo className="hidden md:block" />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://tiapome.notion.site/KnowledgeLayer-Manifesto-dc10fb32bfb34847a591894479f3107a"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Read the manifesto</Button>
          </a>
        </div>
      </Container>
    </header>
  );
};
