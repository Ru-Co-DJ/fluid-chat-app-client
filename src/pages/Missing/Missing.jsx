import React from 'react'
import {Box, Typography} from "@mui/material"
import "./missing.css"
const Missing = () => {
  return (
    <Box className="notFound">
      <Typography variant="h1" color="primary" style={{fontWeight:"bold"}}>404</Typography>
      <Typography variant="h1" color="secondary">Page Not Found !!</Typography>
    </Box>
  )
}

export default Missing