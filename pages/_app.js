import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import Footer from "@/Components/Shared/Footer/Footer";
import Navbar from "@/Components/Shared/Navbar/Navbar";
import TopBar from "@/Components/Shared/TopBar/TopBar";
import ScrollToTop from "react-scroll-up";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@/Contexts/AuthProvider/AuthProvider";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TopBar></TopBar>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <ToastContainer />
        <ScrollToTop showUnder={160}>
          <span className="text-4xl text-blue-600 hover:text-sky-600">
            <BsArrowUpCircleFill className="animate-bounce"></BsArrowUpCircleFill>
          </span>
        </ScrollToTop>
        <Footer></Footer>
      </AuthProvider>
    </QueryClientProvider>
  );
}
