import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, LogOut } from "react-feather";
import { NavbarTitle } from "../../utils/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const navbarTitle: NavbarTitle[] = [
  {
    name: "Cart",
    path: "/cart",
    icon: <ShoppingCart width={26} height={26} />,
  },
  {
    name: "Favorites",
    path: "/favorites",
    icon: <Heart width={26} height={26} />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <LogOut width={26} height={26} />,
  },
];
function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-50 w-full ">
      <nav className="bg-gray-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div
                onClick={() => navigate("/dashboard")}
                className="flex-shrink-0 px-4 py-2 text-[32px] font-medium text-gray-300 rounded-md cursor-pointer hover:bg-gray-700 hover:text-white"
              >
                LOGO
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navbarTitle.map((nav: NavbarTitle) => (
                    <button
                      onClick={() => {
                        if (nav.name === "Logout") {
                          toast("Logout");
                          setTimeout(() => {
                            navigate(nav.path);
                          }, 2000);
                        } else {
                          navigate(nav.path);
                        }
                      }}
                      className={`flex items-center justify-center gap-2 px-3 py-2 text-lg font-medium ${
                        window.location.pathname === nav.path
                          ? "bg-gray-700"
                          : "bg-transparent"
                      } text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`}
                    >
                      {/* {nav.name} */}
                      {nav.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navbarTitle.map((nav: NavbarTitle) => (
                  <button
                    onClick={() => navigate(nav.path)}
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    {nav.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <ToastContainer />
    </div>
  );
}

export default Nav;
