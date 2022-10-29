import React, {useState} from 'react'
import { Typography, Box, Grid, Avatar, Button } from '@mui/material'
import "./profile.css"


const Profile = () => {
    const [account, setAccount] = useState(JSON.parse(localStorage.getItem("account")))

    return (
    <Box style={{marginTop:"50px"}}>
        <Grid container spacing={5}>
            {/* //! display data */}
            <Grid item xs={12} md={7}>
                <Box className="profileName">
                    <Avatar style={{backgroundColor:"#7A2048", width:"100px",height:"100px", margin:"20px"}}></Avatar>
                    <Box>
                        <Typography variant="h4" color="primary">Hello, {account.name.split(" ")[0]}</Typography>
                        <Typography variant="subtitle1" color="primary">Phone Number: <span style={{fontWeight:"bold"}}>{account.phone}</span></Typography>
                        <Typography variant="subtitle1" color="primary">Email: <span style={{fontWeight:"bold"}}>{account.email}</span></Typography>
                    </Box>
                    <Box className="profileFriends">
                    <Typography variant="subtitle1" color="primary">Friends:</Typography>
                    {account?.friends.map((e,i)=>{
                        return(
                            <Box key={i} className="oneFriend">
                                <span >{e.name}: </span>
                                <span style={{fontWeight:"bold"}}> {e.phone}</span>
                            </Box>
                        )
                    })}
                    
                    </Box>
                </Box>
            </Grid>

            {/* //! btn to modify email */}
            <Grid item xs={12} md={5}>
                <Box style={{margin:"10px"}}>
                    <Typography variant="h5" color="primary">Change Email</Typography>
                    <Box className="profileChangeEmail">
                        <Typography variant="subtitle1" color="info.main">Please note that if you changed your email<br/>you must reactivate it again</Typography>
                        <Button variant="contained" color="info" style={{margin:"10px"}}>Change</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={5}>
            {/* //! delete account */}
            <Grid item xs={12}>
                <Box style={{margin:"10px", width:"50%"}}>
                    <Typography variant="h5" color="secondary">Delete Account</Typography>
                    <Box className="profileDeleteEmail">
                        <Typography variant="subtitle1" color="info.main">Please note that if you deleted your Account<br/>there is no going back</Typography>
                        <Button variant="contained" color="info" style={{margin:"10px"}}>Delete</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>





    </Box>
  )
}

export default Profile