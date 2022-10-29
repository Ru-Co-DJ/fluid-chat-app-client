import React,{useState} from 'react'
import { Typography, Box, AppBar, Toolbar, Button, Avatar, Tooltip  } from '@mui/material'
import {Link} from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/images/logo.png"
import LogoutIcon from '@mui/icons-material/Logout';
import useWindowDimensions from '../../utils/hooks/window';



const Navbar = () => {
    const [account,setAccount]=useState(JSON.parse(localStorage.getItem("account")))
    
    return (
    <Box>
        <AppBar position='static' elevation={0} color="secondary" style={{width:"100%"}}>
            <Toolbar className="toolbar">
                <Box>
                    <Link to="/" className="logo link">
                        <img src={logo} alt="Home" width="30px"/>
                        <Typography variant="h5" style={{marginLeft:"5px"}}>Fluid</Typography>
                    </Link>
                </Box>
                <Box className="navItems">
                    <Box className="navItem">
                        <Link to="/chat" className="link">
                            <Typography variant="h6">Chat</Typography>
                        </Link>
                    </Box>
                    <Box className="navItem">
                        <Link to="/rooms" className="link">
                            <Typography variant="h6">Rooms</Typography>
                        </Link>
                    </Box>
                    <Box className="navItem">
                        <Link to="/learn" className="link">
                            <Typography variant="h6" >Learn</Typography>
                        </Link> 
                    </Box>
                    <Box className="navItem">
                        <Link to="/contact" className="link">
                            <Typography variant="h6">Contact</Typography>
                        </Link>
                    </Box>
                </Box>
                {
                    !account ? (
                        <Box className="loginBtns">
                    <Link to="/auth/login" className="link">
                        <Button variant="text" color="info" style={{margin:"5px"}}>Login</Button>
                    </Link>
                    <Link to="/auth/signup" className="link">
                        <Button variant="contained" color="info" size="small" style={{margin:"5px"}}>Sign up</Button>
                    </Link>
                    
                </Box>
                
                    ):(
                        <Box className="navAccount">
                            <Avatar sx={{width:30,height:30}}>{account.name[0].toUpperCase()}</Avatar>
                            <Link to="/profile" style={{textDecoration:"none", color:"#f2f2f2"}}>
                                <Typography variant="subtitle1" color="info.main" style={{marginLeft:"5px"}} className="navAccountName">{account.name}</Typography>
                            </Link>
                            <Tooltip title="log out">
                                <a href="/" style={{textDecoration:"none",color:"#f2f2f2"}} onClick={()=>{localStorage.clear()}}>
                                    <LogoutIcon style={{marginLeft:"10px", fontSize:"25px", cursor:"pointer"}}/>
                                </a>
                            </Tooltip>
                        </Box>
                    )
                }
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar