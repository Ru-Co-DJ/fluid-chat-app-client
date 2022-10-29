import React from 'react'
import "./contact.css"
import { Typography, Box, TextField, Button, Select, Checkbox, FormControlLabel  } from '@mui/material'
const Contact = () => {
  return (
    <Box className="contactContainer">
        <Typography variant="h4" color="primary" style={{fontWeight:"bold"}}>Contact Us</Typography>
        <Box className="contactInpContainer">
            <Box className="contactInput">
                <TextField variant="outlined" label="Name" style={{width:"60%"}}/>
            </Box>
            <Box className="contactInput">
                <TextField variant="outlined" label="email" style={{width:"60%"}}/>
            </Box>
            <Box className="contactInput">
                <TextField variant="outlined" multiline rows={10} label="Message" style={{width:"60%"}}/>
            </Box>
            <FormControlLabel control={<Checkbox />} label="Already have an account" />
            <Button variant="contained">Submit</Button>
        </Box>
    </Box>
  )
}

export default Contact