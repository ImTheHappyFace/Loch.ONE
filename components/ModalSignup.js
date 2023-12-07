import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import SignUp from './SignUp';
import CloseIcon from '@mui/icons-material/Close';
import {  Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalFinal from './ModalFinal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalSignup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const router = useRouter()

  const mailCheckPattern =
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


const [email, setEmail] = useState("");
const [error, setError] = useState(false);
const [openFinal, setOpenFinal] = useState(false);
const [dialogOpen,setDialogOpen]=useState("")
const [mailError,setMailError] = useState({
  isMailInvalid:false,
  isMailEmpty:false
})

const [mailSubmitMessage, setmailSubmitMessage] = useState({
  severity: "success",
  message: "",
});

const handleChange = (e) => {setEmail(e.target.value);setMailError({
    isMailInvalid:false,
  isMailEmpty:false
});}




const handleSubmit = (e) => {
      if(String(email).length<1){
          console.log("Please enter something")
          setMailError({
              isMailEmpty:true
          })    
          return
      }

  if (String(email).toLowerCase().match(mailCheckPattern)) {
      console.log("RIGHT");
      setOpenFinal(true)

      setTimeout(() => {
          router.push("https://app.loch.one/welcome")
      }, 4000);


  }
  else{
      console.log("NO")
      setMailError({
          isMailInvalid:true
      })  
  }

}

  return (
    <div>
      <button onClick={handleOpen} className='menuOpen'><MenuIcon/></button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{backgroundColor:"white"}}
      >
 <>
 <button className='modalClose' onClick={()=>setOpen(false)}><CloseIcon/></button>
        <div style={{display:'flex',justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"white"}}>
        <div>
                            <Typography className="signup_header" style={{marginBottom:"1.5rem",color: "var(--grey-300, #B0B1B3)",fontSize:"39px"}}>
                            Sign up for <br/> exclusive access.
                            </Typography>
                            <form className="signup_form" style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"1.5rem"}}>
                                <input
                                type ="text"
                                 onChange={(e) => handleChange(e)}
                                  placeholder="Your email address" 
                                  style={{width:"340px",padding:"20px 24px",border:"1px solid var(--grey-100, #E5E5E6)",borderRadius:"8px",outline:"none"}}  name="" value={email}
                                  />
                                <Button 
                                onClick={(e) => handleSubmit(e)}
                                 style={ { borderRadius:"8px", width:"340px", height:"59px",padding:"18px 28px",gap:"12px",marginTop:"12px",  backgroundColor:"black",color:"white"}}>Submit</Button>
                            </form>
                                {mailError.isMailInvalid &&     <div style={{marginBottom:"1rem",textAlign:"center"}}>
                                    <Typography className="signup_subheader" variant="bold" style={{fontSize:"16px",fontWeight:"600",padding:"18px 0",color:"red"}}>
                            Please enter valid email
                            </Typography>
                                </div>}
                            
                            {mailError.isMailEmpty &&   <div style={{marginBottom:"1rem",textAlign:"center"}}>
                                <Typography className="signup_subheader" variant="bold" style={{fontSize:"16px",fontWeight:"600",padding:"18px 0",color:"red"}}>
                            {"Mail can't be empty"}
                            </Typography>
                            </div>}

                            <Typography className="signup_subheader" variant="bold" style={{fontSize:"16px",fontWeight:"600",padding:"18px 0"}}>
                            {"You’ll receive an email with an invite link to join."}
                            </Typography>
                    </div>
            </div>
            <ModalFinal open={openFinal}/>
 </>
        
      </Modal>
    </div>
  );
}
