import React from "react";

import { Container } from "@components/layout/container";
import GithubIcon from "@icons/github.svg";
import TwitterIcon from "@icons/twitter.svg";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-base-content/10 py-10">
          <div className="shrink-0 md:flex-1">© 2023, KnowledgeLayer</div>

          <div className="flex items-center justify-end gap-4 md:flex-1">
            <a
              href="https://twitter.com/knowledgelayer_"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/knowledgelayer/knowledgelayer-contracts"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
