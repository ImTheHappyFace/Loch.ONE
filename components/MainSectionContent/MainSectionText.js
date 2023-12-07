import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Typography } from '@mui/material';


export default function MainsectionText(){
    return(
        <>
            <div className='textContainerMid'  style={{flex:"1 0 40%",display:"flex",justifyContent:"flex-end",textAlign:"right"}}>
                <div className='mainContainer' style={{maxWidth:"65%"}}>
                <div>
                    <RemoveRedEyeOutlinedIcon fontSize="large" style={{color:"white"}}/>
                    </div>
                <Typography className='mainTextHeader' style={{ textAlign:"right", fontSize:"30px",lineHeight:"120%",fontWeight:"500",marginBottom:"1.5rem"}} >
                Watch what the whales are doing    
                          </Typography>
                <Typography className='mainTextSubHeader' style={{textAlign:"right", fontSize:"16px",lineHeight:"125%",fontWeight:"500"}} >
All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.                </Typography>
                </div>
            </div>
        </>
    )
}