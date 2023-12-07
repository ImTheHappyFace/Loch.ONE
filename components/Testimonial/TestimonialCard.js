import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import slide_image_1 from "../../public/assets/images/test1.svg";
import slide_image_2 from '../../public/assets/images/test2.svg';
import slide_image_3 from '../../public/assets/images/test1.svg';
import Marquee from "react-fast-marquee";


export default function TestimonialCarousal({logo}){


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <>
    <div className='testContainer' style={{maxWidth:"800px",display:"flex",justifyContent:"space-between"}}>
        <img style={{alignSelf:"flex-end",marginRight:"3.5rem",marginBottom:"20px"}} src={logo.src} alt=""/>

  <Marquee speed={30} delay={20} pauseOnHover={true}>
    <img className='marquee_images' src= {slide_image_1.src} alt="slide_image" />
    <img className='marquee_images' src= {slide_image_2.src} alt="slide_image" />
    <img className='marquee_images' src= {slide_image_1.src} alt="slide_image" />
    <img className='marquee_images' src= {slide_image_2.src} alt="slide_image" />
  </Marquee>
{/* </Carousel> */}
    </div>
</>
    )
}