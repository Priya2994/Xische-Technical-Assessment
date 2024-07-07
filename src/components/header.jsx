import React from "react";

import Logo from "../assets/svg/logo";

export default function Header() {
  return (
    <header className="bg-white justify-center flex w-full h-24 py-4 border-b-2 sticky top-0 z-50">
      <a
        href="https://www.nytimes.com/international"
        className="flex max-w-full px-3 md:w-10/12 justify-center"
        title="NewYorkTimes logo"
      >
        <Logo />
      </a>
    </header>
  );
}
