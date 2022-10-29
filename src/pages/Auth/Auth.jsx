import React,{useState,useEffect} from 'react'
import {Link, useLocation} from "react-router-dom"
import {Box, TextField, Typography, Button} from "@mui/material";
import "./auth.css"
import {login, signUp} from "../../api"
import { useNavigate } from 'react-router-dom';

const handleLogin = async (account)=>{
    const result = await login(account);
    if(result){
        localStorage.setItem("account",JSON.stringify(result))
        return true
    }
    else{
        return false
    }
}

const handleSign = async (account)=>{
    const result = await signUp(account)
    if(result){
        localStorage.setItem("account",JSON.stringify(result))
        return true
    }
    else{
        return false
    }
}


const Auth = () => {
    const path = useLocation().pathname.split("/").pop()
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [logged, setLogged] = useState(false)
    const [signAccount,setSignAccount] = useState({name:"",email:"",password:"",phone:""})

    const navigate = useNavigate()

    useEffect(()=>{
        if(logged){
            
            navigate("/",{replace:true})
            navigate(0)
        }

    },[logged])


  return (
    <Box>
        <Box className="backgroundAuth"/>
        {
            path === "login" && (
                <Box className="container">
                    <Typography variant="h5" className="indec">Login</Typography>
                    <Box className="items">
                        <TextField label="Email" variant="standard" autoFocus style={{margin:"10px"}} onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField label="Password" type="password" variant="standard" style={{margin:"10px"}} onChange={(e)=>setPassword(e.target.value)}/>
                        <Button variant="contained" color="secondary" style={{marginTop:"60px"}} disabled={!email.length || !password.length } onClick={()=>(handleLogin({email,password}).then((res)=>setLogged(res)))}> login</Button>
                    </Box>
                </Box>
            )
        }
        {
            path === "signup" && (
                <Box className="container">
                    <Typography variant="h5" className="indec">Sign Up</Typography>
                    <Box className="items">
                        <div>
                            <TextField label="Full Name" variant="standard" style={{margin:"10px"}} required onChange={(e)=>setSignAccount(prev=>({...prev,name:e.target.value}))}/>
                        </div>
                        <TextField label="Email" variant="standard"  style={{margin:"10px"}} required onChange={(e)=>setSignAccount(prev=>({...prev,email:e.target.value}))}/>
                        <TextField label="Phone" variant="standard" style={{margin:"10px"}} required onChange={(e)=>setSignAccount(prev=>({...prev,phone:e.target.value}))}/>
                        <TextField label="Password" type="password" variant="standard" style={{margin:"10px"}} required onChange={(e)=>setSignAccount(prev=>({...prev,password:e.target.value}))}/>
                        <TextField label="Re-Password" type="password" variant="standard" style={{margin:"10px"}} required/>
                        <Button variant="contained" color="secondary" style={{marginTop:"60px"}} disabled={!signAccount.name || !signAccount.phone || !signAccount.email || !signAccount.password} onClick={()=>{handleSign(signAccount).then((res)=>setLogged(res))}}> Signup </Button>
                    </Box>
                </Box>
            )
        }
        <div className="alternativ">
            {
                path === "login" &&(
                    <Link to="/auth/signup" style={{textDecoration:"none"}}><Typography variant="subtitle1" color="info.main">Signup instead ?</Typography></Link>
                )
            }
            {
                path === "signup" &&(
                    <Link to="/auth/login" style={{textDecoration:"none"}}><Typography variant="subtitle1" color="info.main">Login instead ?</Typography></Link>
                )
            }
        </div>
    </Box>
  )
}

export default Auth