import Footer from '@/Components/Shared/Footer/Footer'
import Navbar from '@/Components/Shared/Navbar/Navbar'
import TopBar from '@/Components/Shared/TopBar/TopBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>

  )

}
