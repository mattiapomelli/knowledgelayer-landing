import { Transition } from "@headlessui/react";
import cx from "classnames";
import { useRouter } from "next/router";

import { Container } from "@components/layout/container";
import { GITHUB_URL, MANIFESTO_URL } from "@constants/urls";

import type { Dispatch, SetStateAction } from "react";

interface NavItemProps {
  text: string;
  href: string;
  onClick?: () => void;
}

const NavItem = ({ text, href, onClick }: NavItemProps) => {
  const router = useRouter();

  return (
    <a
      href={href}
      target="_blank"
      onClick={onClick}
      className={cx(
        "rounded-btn flex items-center py-2 px-4 font-medium hover:bg-base-200",
        {
          "bg-base-200": router.pathname === href,
        },
      )}
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

interface MobileMenuProps {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export const MobileMenu = ({
  showMenu,
  setShowMenu,
  className,
}: MobileMenuProps) => {
  const closeMenu = () => setShowMenu(false);

  return (
    <Transition
      show={showMenu}
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className={className}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 top-[6.25rem] z-20 bg-black opacity-20"
        onClick={closeMenu}
      />
      <div className="rounded-b-box absolute top-full z-30 w-full bg-base-100 pb-6">
        <Container>
          <nav className="flex flex-col gap-2">
            <NavItem text="Github" href={GITHUB_URL} onClick={closeMenu} />
            <NavItem
              text="Manifesto"
              href={MANIFESTO_URL}
              onClick={closeMenu}
            />
          </nav>
        </Container>
      </div>
    </Transition>
  );
};
