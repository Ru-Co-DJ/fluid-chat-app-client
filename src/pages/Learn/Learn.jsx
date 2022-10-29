import React from 'react'
import {Box, Typography} from "@mui/material";
import "./learn.css"
const Learn = () => {
  return (
    <Box className="learnContainer">
        <Box className="learnText">
            How To use Fluid
        </Box>
        <Box className="learnCards">
            <Box className="learnPrivacy">
                <Typography variant="h5" color="info.main">Privacy</Typography>
                <Typography variant="subtitle1" color="info.main">Please Don't share any kind of sensetive information on the chat, unless you are sure about the identity of your recipient</Typography>
            </Box>
            <Box className="learnRules">
                <Typography variant="h5" color="info.main">Rules</Typography>
                <Typography variant="subtitle1" color="info.main">During your time with us, please remain polite to everyone, and please keep in mind any report given by other users will result to analyzing the chat and could lead to account suspension</Typography>
            </Box>
            <Box className="learnPrivacy">
                <Typography variant="h5" color="info.main">Info</Typography>
                <Typography variant="subtitle1" color="info.main">You cant add a recipient that does not have an account<br/>You can delete any conversation or friend but keep in mind, it will be deleted for you only</Typography>
            </Box>
        </Box>
        <Box style={{margin:"50px"}}>
            <Typography variant="h4" color="secondary">And Most importantly<br/>HAVE FUN &#x1F60A;</Typography>
        </Box>
        
    </Box>
  )
}

export default Learn