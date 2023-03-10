import { AuthContext } from "@/Contexts/AuthProvider/AuthProvider";
import { Avatar } from "flowbite-react";
import Link from "next/link";
import { useContext, useState } from "react";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuItem from "./MenuItem";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: "99",
      display: "flex",
      alignItems: "center",
      background: "#0D1741",
      backgroundRepeat: "no-repeat",
      width: "100%",
      color: "white",
      fontFamily: "Lobster",
    },
    logo: {
      margin: "0 auto",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      filter: menuOpen ? "blur(2px)" : null,
      transition: "filter 0.5s ease",
    },
  };

  const menu = [
    {
      item: "Home",
      link: "/",
    },
    {
      item: "Properties",
      link: "/properties",
    },
    {
      item: "About Us",
      link: "/about",
    },
    {
      item: "Contact Us",
      link: "/contact",
    },
    {
      item: "Blog",
      link: "/blog",
    },
    {
      item: "Dashboard",
      link: "/dashboard",
    },
  ];
  const menuItems = menu.map((val, index) => {
    return (
      <MenuItem
        key={index}
        delay={`${index * 0.1}s`}
        onClick={() => {
          handleLinkClick();
        }}
      >
        <Link href={val.link}>{val.item}</Link>
      </MenuItem>
    );
  });

  return (
    <div className="lg:bg-primary sticky top-0 z-40">
      <nav className="max-w-[1440px] w-[95%] mx-auto text-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container hidden lg:flex flex-wrap items-center justify-between mx-auto">
          <Link href="/" className="flex items-center">
            <img
              src="https://i.ibb.co/9vLTqg9/image.png"
              className="h-9 mr-3 sm:h-12"
              alt="farebd Logo"
            />
            <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">
              Fare<span className="text-secondary">BD</span>
            </span>
          </Link>
          <div className="flex md:order-2 gap-2">
            {user ? (
              <div className="hidden md:flex">
                <Link href="/userprofile">
                  <Avatar
                    img={user?.photoURL}
                    rounded={true}
                    className="border rounded-full"
                  />
                </Link>
                <button
                  type="button"
                  onClick={handleLogOut}
                  className="ml-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button
                    type="button"
                    className="text-white btn btn-xs btn-outline border hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button
                    type="button"
                    className="hidden lg:flex text-white btn border bg-secondary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Properties
                </Link>
              </li>
              {/* <li>
                        <Link href="/addProperty" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Property</Link>
                     </li> */}

              <li>
                <Link
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
              {user && (
                <li>
                  <Link
                    href="/dashboard"
                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="lg:hidden">
          <div style={styles.container}>
            <MenuButton
              open={menuOpen}
              onClick={() => handleMenuClick()}
              color="white"
            />
            <div style={styles.logo}>
              <Link href="/" className="flex items-center">
                <img
                  src="https://i.ibb.co/9vLTqg9/image.png"
                  className="mr-3 h-10 sm:h-12"
                  alt="farebd Logo"
                />
                <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">
                  Fare<span className="text-secondary">BD</span>
                </span>
              </Link>
            </div>
          </div>
          <Menu open={menuOpen}>
            <>
              {menuItems}
              {/* <div className="flex items-center gap-5">
                <Link
                  style={{
                    fontWeight: "semi-bold",
                    fontSize: "17px",
                    padding: "1rem 0",
                    margin: "0 5%",
                    cursor: "pointer",
                    transition: "color 0.2s ease-in-out",
                    animation: "0.5s slideIn forwards",
                    animationDelay: "1s",
                  }}
                  href="/userprofile"
                >
                  <Avatar
                    img={user?.photoURL}
                    rounded={true}
                  />
                </Link>
                <button
                  type="button"
                  onClick={handleLogOut}
                  className="ml-2 text-white bg-red-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  style={{
                    fontWeight: "semi-bold",
                    fontSize: "17px",
                    padding: "1rem 0",
                    margin: "0 5%",
                    cursor: "pointer",
                    transition: "color 0.2s ease-in-out",
                    animation: "0.5s slideIn forwards",
                    animationDelay: "0.5s",
                  }}
                >
                  Logout
                </button>
              </div> */}
            </>
          </Menu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
