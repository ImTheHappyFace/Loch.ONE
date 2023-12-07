import mid_image from "../public/assets/images/Cohorts 1.png"
import MainsectionImage from "./MainSectionContent/MainSectionImage"
import MainsectionText from "./MainSectionContent/MainSectionText"

export default function MainSection(){
    return(
        <>
                <div className="mainSectionContainer" style={{display:"flex",justifyContent:"space-between",padding:"1.5rem"}}>
            <MainsectionImage mid_image={mid_image}/>
            <MainsectionText/>
        </div>
         </>
    )
}