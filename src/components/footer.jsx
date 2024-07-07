import React from "react";

import { footerMenu } from "../utils/constant";

import Logo from "../assets/logo.svg";

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 border-t-2">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a
            href="https://www.nytimes.com/international"
            className="flex w-full h-10 md:w-10/12"
          >
            <img src={Logo} alt="NewYorTimes logo" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          {footerMenu.map((menu) => (
            <div key={menu.title}>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {menu.title}
              </h2>
              {menu.headerMenu.map((list) => (
                <ul
                  key={list.menu}
                  className="text-gray-500 dark:text-gray-400 font-medium"
                >
                  <li className="mb-4">
                    <a href={list.link} className="hover:underline">
                      {list.menu}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <a
            href="https://help.nytimes.com/hc/en-us/articles/115014792127-Copyright-Notice"
            className="hover:underline"
          >
            The New York Times Company
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
);
export default Footer;
