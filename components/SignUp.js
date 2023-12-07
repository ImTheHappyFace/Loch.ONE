import { Alert, Button, Snackbar, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";


import ModalFinal from "./ModalFinal";


export default function SignUp(){



    const router = useRouter()

    const mailCheckPattern =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
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
        setOpen(true)

        setTimeout(() => {
            router.push(`https://app.loch.one/welcome`)
        }, 4000);


    }
    else{
        console.log("NO")
        setMailError({
            isMailInvalid:true
        })  
    }

  }
    return(
        <>


            <div className="signup_container" style={{display:'flex',justifyContent:"center",alignItems:"center",height:"100vh"}}>
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
                           {" Mail can't be empty"}
                            </Typography>
                            </div>}

                            <Typography className="signup_subheader" variant="bold" style={{fontSize:"16px",fontWeight:"600",padding:"18px 0"}}>
                           {" You’ll receive an email with an invite link to join."}
                            </Typography>
                    </div>
            </div>


            <ModalFinal open={open}/>
        </>
    )
}