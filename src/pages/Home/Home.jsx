import React from 'react'
import { Typography, Box, Button, Grid } from '@mui/material'
import "./home.css";
import logo1 from "../../assets/images/logo1.png"
import speed from "../../assets/images/speed.png"
import privacy from "../../assets/images/private.png"
import secure from "../../assets/images/secure.png"

const Home = () => {
  
    return (
        <Box style={{marginBottom:"50px"}}>
            <Box className="homeContainer">
                <Box className="hero">
                    <Typography  variant="h3" className="staticText" color="primary">Best Messaging Application<br/>Provides you with:</Typography>
                    <Box className="row">
                        <ul className="dynamicText">
                            <li><span>Speed</span></li>
                            <li><span>Privacy</span></li>
                            <li><span>Security</span></li>
                            <li><span>Anywhere</span></li>
                        </ul>
                    </Box>
                <Box style={{marginTop:"50px"}}>
                    <Button variant="contained" style={{margin:"10px",width:"200px"}}>Find Friends</Button>
                    <Button variant="contained" style={{margin:"10px",width:"200px"}}>Open A room</Button>
                </Box>
                </Box>
                <Box className="imgContainer">
                    <img src={logo1} alt="fluid" width={"400px"}/>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4} className="grids">
                        <Box className="grids">
                            <Typography variant="h5" color="primary">Fast</Typography>
                            <Typography variant="body1" color="primary">Under 50ms response time<br/>with our super fast servers</Typography>
                            <img src={speed} alt="fast" width="80px"/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} className="grids">
                        <Box className="grids">
                            <Typography variant="h5" color="primary">Secure</Typography>
                            <Typography variant="body1" color="primary">With the latest Encryption<br/>algorithms, maximum security is granted</Typography>
                            <img src={secure} alt="secure" width="70px"/>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={4} className="grids">
                        <Box className="grids">
                            <Typography variant="h5" color="primary">Private</Typography>
                            <Typography variant="body1" color="primary">We appreciate your privacy<br/>Only share what you want</Typography>
                            <img src={privacy} alt="private" width="80px"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
  )
}

export default Home