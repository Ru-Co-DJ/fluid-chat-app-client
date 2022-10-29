import React from 'react'
import {createTheme, ThemeProvider} from "@mui/material/styles"

const theme = createTheme({
    palette:{
        primary:{
            main:"#1E2761",
            light:"#408EC6",
            dark:"#c4caed"
        },
        secondary:{
            main:"#7A2048",
            light:"#d45e93",
            dark:"#f4d7e4"
        },
        info:{
            main:"#d9d9d9",
            light:"#f2f2f2",
            dark:"#ffffff"
        }
    },
    typography:{
        h6:{
            fontFamily:"Raleway, sans-serif",
            fontWeight:300
        },
        h5:{
            fontFamily:"Raleway, sans-serif",
            fontWeight:500
        },
        h4:{
            fontFamily:"Raleway, sans-serif",
            fontWeight:500
        },
        h3:{
            fontFamily:"Raleway, sans-serif",
            fontWeight:400
        },
        h2:{
            fontFamily:"Raleway, sans-serif",
            fontWeight:400
        },
        h1:{
            fontFamily:"Raleway, sans-serif",
            fontWeight:400
        },
        subtitle1:{
            fontFamily:"Raleway, sans-serif",
            fontWeight:400
        },
        body1:{
            fontFamily:"Raleway, sans-serif",
            fontWeight:400
        }
        

    }
}) 


const Theme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

export default Theme