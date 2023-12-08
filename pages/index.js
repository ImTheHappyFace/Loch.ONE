import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import MainSection from '../components/MainSection'
import Testimonials from '../components/Testimonials'
import { Button } from '@mui/material'
import bg from '../public/assets/images/bluela2.png'
import SignUp from '../components/SignUp'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import ModalSignup from '../components/ModalSignup'


export default function Home() {
  const mainDiv = {
    // backgroundImage: `url(${bg.src})`,
    background: "radial-gradient(162.19% 150.74% at -28.73% 97.27%, rgba(31, 169, 17, 0.81) 17.21%, rgb(47, 21, 208) 64.58%, rgba(0, 0, 0, 0) 100%)",
    
    // height: '100vh',
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    display:"flex",
    
  }


  const left ={
      flex:"1 0 60%",
      padding:"1.5rem 0px"
      
  }

  const right ={
    flex:"1 0 40%",
    height:"auto ",
    background: "#FFF",
    boxShadow: "0px 14px 64px -4px rgba(24, 39, 75, 0.12), 0px 8px 22px -6px rgba(24, 39, 75, 0.12)"
  }
  
  return (
      <>
              <Head>
        <title>LOCH</title>
      </Head>

          <div className='masterContainer' style={mainDiv} >
            <ModalSignup/>
            <div style={left} className="left">
            <Navbar/>
          <MainSection/>
          <Testimonials/>
            </div>
            <div style={right} className="right">
              <SignUp/>
            </div>
          </div>
      </>
  )
}
