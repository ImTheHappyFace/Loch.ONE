import NavbarCarousal from "./Navbar/NavbarCarousal";
import NavbarText from "./Navbar/NavbarText";

export default function Navbar(){
    return(
        <>
                <div className="navbar_container" style={{display:"flex",justifyContent:"space-between",paddingBottom:"1.5rem"}}>
                <NavbarText/>
            <NavbarCarousal/>
                </div>
         </>
    )
}