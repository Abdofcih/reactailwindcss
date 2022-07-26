import React, { useState } from "react";
import logo from "../assets/arrow.png";
const navigation = [
  { name: "الرئيسية", href: "#home" },
  { name: "اقرأ عنا", href: "#about" },
  { name: "خدماتنا", href: "#services" },
  { name: "احصائيات", href: "#stats" },
  { name: "تواصل معنا", href: "#contact" }
];
const Nav = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => {
    setMenuOpened(prev => !prev);
  };
  const bgWhiteToggle = () => {
    return isMenuOpened ? "bg-white" : "bg-black";
  };
  return (
    <nav className="w-full fixed top-0 bg-white relative">
      {/*this will be shown in md screens and above*/}
      <section className="container px-3 mx-auto py-5 flex items-center  justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            <p className="text-2xl font-bold text-green-900">العزايزي</p>
            <p className="text-sm  text-green-900">مكتب محاماة</p>
          </span>
        </div>
        <ul className="hidden md:flex items-center gap-4 font-bold text-gray-700 text-lg">
          {navigation.map((link, i) => (
            <li
              key={i}
              className="hover:text-gray-600 font-bold hover:-translate-y-0.5"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/*    <div>   <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-900 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg> </div>*/}

        {/*this will be shown in sm screens*/}
        <div
          className={`space-y-1 md:hidden z-30 cursor-pointer`}
          onClick={toggleMenu}
        >
          <div className={`${bgWhiteToggle()} w-6 h-0.5 `}></div>
          <div className={`${bgWhiteToggle()} w-6 h-0.5 `}></div>
          <div className={`${bgWhiteToggle()} w-6 h-0.5 `}></div>
        </div>
        <ul
          className={`${
            !isMenuOpened ? "hidden" : ""
          } z-20  md:hidden bg-green-900 absolute top-0 left-0 w-full p-14  space-y-10 text-white text-center rounded-b-2xl`}
        >
          {navigation.map((link, i) => (
            <li
              key={i}
              className="hover:text-gray-600 font-bold hover:-translate-y-1"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
