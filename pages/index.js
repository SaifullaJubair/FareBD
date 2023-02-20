import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/Components/Home/Header/Header'
import Searchfield from '@/Components/Home/Searchfield/Searchfield'
import SellAndRent from '@/Components/Home/SellAndRent/SellAndRent'
import Division from '@/Components/Home/Division/Division'
import Advertise from '@/Components/Home/Advertise/Advertise'
import About from '@/Components/Home/About/About'
import Review from '@/Components/Home/Review/Review'
import Branding from '@/Components/Home/Branding/Branding'
import ContactUs from '@/Components/Home/Contactus/ContactUs'
// import PhotoGallery from '@/Components/Home/PhotoGallery/PhotoGallery'
import Welcome from '@/Components/Home/Welcome/Welcome'
import Hero from '@/Components/Home/Hero/Hero'

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <>
      <Head>
        <title>FareBD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero></Hero>
        <Searchfield></Searchfield>

        <SellAndRent></SellAndRent>
        <Division></Division>
        <Header></Header>
        <Advertise></Advertise>
        <Welcome></Welcome>
        {/* <PhotoGallery></PhotoGallery> */}

        <About></About>
        <Review></Review>
        <Branding></Branding>
        <ContactUs></ContactUs>
      </main>
    </>
  );
}
