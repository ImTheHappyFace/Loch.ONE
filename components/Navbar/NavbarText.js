import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Typography } from '@mui/material';

export default function NavbarText(){
    return(
        <>
            <div style={{flex:"1 0 40%",paddingLeft:"1.5rem"}}>
                <div className='navText_container' style={{maxWidth:"75%"}}>
                <div>
                    <NotificationsNoneOutlinedIcon fontSize="large" style={{color:"white"}}/>
                    </div>
                <Typography className='navbarHeader' style={{fontSize:"30px",lineHeight:"120%",fontWeight:"500",marginBottom:"1.5rem"}} >
                Get notified when a highly correlated whale makes a move
                </Typography>
                <Typography className='navbarSubheader' style={{fontSize:"16px",lineHeight:"125%",fontWeight:"500"}} >
                Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
                </Typography>
                </div>
            </div>
        </>
    )
}