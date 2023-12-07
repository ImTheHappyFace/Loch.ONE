import { Typography } from "@mui/material";
import logo from "../public/assets/images/logo.svg"
import TestimonialCarousal from "./Testimonial/TestimonialCard";

export default function Testimonials(){
    return(
        <>
            <Typography style={{fontSize:"25px",padding:"0 1.5rem",textAlign:"right"}}>
                Testimonials
            </Typography>
            <div style={{borderTop:"3px solid white",margin:"1.5rem 1.5rem"}}>
                
            </div>
            {/* <img src={logo.src} alt=""/> */}
            <div style={{width:"100%",display:"flex"}}>
            <TestimonialCarousal logo={logo}/>
            </div>
         </>
    )
}