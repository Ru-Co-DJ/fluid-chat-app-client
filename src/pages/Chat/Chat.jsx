import React,{useState, useEffect} from 'react'
import "./chat.css"
import { Typography, Box, Grid, Button, Avatar, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Tooltip, Snackbar, Alert } from '@mui/material'
import "./chat.css"
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import SendIcon from '@mui/icons-material/Send';
import ScrollToBottom from 'react-scroll-to-bottom';
import { addNewFriend, getMessages,sendMessage, deleteConv, deleteContact } from '../../api';
import { useNavigate } from 'react-router-dom';





const Chat = () => {
  const [discussion,setDiscussion] = useState([])
  const [messageToBeSent, setMessageToBeSent] = useState("")
  const [addPerson,setAddPerson] = useState(false);
  const [selectedPerson, setSelectedPerson]= useState({})
  const [searchPerson,setSearchPerson]= useState("");
  const [newPerson,setNewPerson] = useState({})
  const [account,setAccount]=useState(JSON.parse(localStorage.getItem("account")) || null)
  const [openSnack,setOpenSnack] = useState({open:false,mssg:"",type:false, color:""})
  const navigate = useNavigate();


  const handleSend = ()=>{
    sendMessage({recPhone:selectedPerson.phone,myPhone:account.phone,data:messageToBeSent})
    setMessageToBeSent("")
  }
 
  const addFriend = ()=>{
    if(newPerson.phone !== account.phone){
      addNewFriend({myPhone:account.phone,newFriend:newPerson}).then(res=>{
        if(res){
          localStorage.setItem("account",JSON.stringify({...account,friends:res}))
          setAccount(JSON.parse(localStorage.getItem("account")))
          setAddPerson(false)
          setOpenSnack({open:true,mssg:"Contact Added",type:true, color:"green"})
        }else{
          setOpenSnack({open:true,mssg:"Wrong Data",type:false,color:"red"})
        }
      })
    }
  }
  const deleteConversation = ()=>{
    if(selectedPerson){
      deleteConv({myPhone:account.phone, recPhone:selectedPerson.phone}).then(res=>{
        res ? setOpenSnack({open:true,mssg:"Conversation deleted",type:true, color:"green"}) : setOpenSnack({open:true,mssg:"select a conversation first",type:false,color:"red"})  
      }) 
    }
  }

  const handleDeleteContact = ()=>{
    if(selectedPerson.phone){
      deleteContact({myPhone:account.phone,recPhone:selectedPerson.phone}).then(res=>{
        if(res){
          localStorage.setItem("account",JSON.stringify({...account, friends:res}))
          setAccount(JSON.parse(localStorage.getItem("account")))
          setOpenSnack({open:true,mssg:"Contact deleted",type:true, color:"green"})
        }
      })
    }
    else{
      setOpenSnack({open:true,mssg:"Select a contact first",type:false, color:"red"})
    }
  }

  useEffect(()=>{
    account && getMessages({myPhone:account.phone,recPhone:selectedPerson.phone}).then(res=>{
      setDiscussion(res)
    })
  },[selectedPerson])

  setTimeout(()=>{
    account && selectedPerson && getMessages({myPhone:account.phone,recPhone:selectedPerson.phone}).then(res=>{
      setDiscussion(res)
    })
  },3000)
  
  useEffect(()=>{
    !account && navigate("/auth/login",{replace:true})
  },[])

  return (
    <Box className="chatContainer">
      <Grid container spacing={5} style={{marginBottom:"50px"}}>
        <Grid item xs={12} md={2}>
          <Box className="chatOptions">
              <Box className="chatOneOption" onClick={()=>setAddPerson(true)}><AddCircleRoundedIcon/> New Contact</Box>
              <Box className="chatOneOption"><SearchRoundedIcon /> Search</Box>
              <Box className="chatOneOption"><ModeEditOutlineIcon />Edit Name</Box>
              <Box className="chatOneOption" onClick={handleDeleteContact}><DeleteRoundedIcon />Delete contact</Box>
              <Box className="chatOneOption"><ReportRoundedIcon /> Report</Box>
              <Box className="chatOneOption" onClick={deleteConversation}><DeleteRoundedIcon />Delete Conversation</Box>

          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="chatText">
            <Box className="contactName">
              <Typography variant="h5" color="secondary">{selectedPerson.name || "No Contact selected"}</Typography>
            </Box>
            <Box className="messagingArea">
                <ScrollToBottom className="messages">
                {
                  discussion ? discussion.map((e,i)=>{
                    return (
                        <Box className={e.sender === account.phone ? "sent" : "rec"} key={i}>
                          <Typography variant="h6" className={e.sender === account.phone ? "sentMssg" : "recMssg"} color="info.main">{e.message}</Typography>
                          <Typography variant="caption">{`${new Date(e.date).toLocaleString()}`}</Typography>
                        </Box>
                    )
                  }):(
                    <Box className="chatNoData">
                      <Typography variant="h4" color="primary">No Data</Typography>
                    </Box>
                  )
                }
                </ScrollToBottom>
              <Box className="typing">
                <TextField value={messageToBeSent} variant="outlined" multiline placeholder="..." rows={2} className="messageInput" onChange={(e)=>{
                  setMessageToBeSent(e.target.value)
                }}/>
                <Button style={{height:"100%",marginBottom:"10px"}} variant="text" disabled={!messageToBeSent.length}><SendIcon style={{fontSize:"40px"}} onClick={handleSend}/></Button>
              </Box>
            </Box>
            
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="chatContact">
            <Box className="searchContact">
              <TextField label="contact" variant="standard" onChange={(e)=>setSearchPerson(e.target.value)} style={{width:"80%"}}/>
            </Box>
            {
              
              account?.friends.map((e,i)=>{
                return (
                  <Tooltip title={e.phone} key={i}>
                    <Box className={e===selectedPerson ? "chatPersonSelected" : "chatPerson"} key={i} onClick={(event)=>{
                      setSelectedPerson(e)
                    }}>
                      <Avatar sx={{backgroundColor:"#1E2761"}}>{e.name[0].toUpperCase()}</Avatar>
                      <Typography variant="h6" style={{margin:"5px"}}>{e.name}</Typography>
                    </Box>
                  </Tooltip>
                )
              })
            }
          </Box>
        </Grid>
      </Grid>
      <Box>
            <Dialog open={addPerson} onClose={()=>setAddPerson(false)}>
              <DialogTitle>Add Contact</DialogTitle>
              <DialogContent>
                <TextField variant="outlined" label="Name" required style={{margin:"5px"}} onChange={(e)=>setNewPerson({...newPerson,name:e.target.value})}/>
                <TextField variant="outlined" label="phone number" required style={{margin:"5px"}} onChange={(e)=>setNewPerson({...newPerson,phone:e.target.value})}/>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" color="warning" onClick={()=>setAddPerson(false)}>Cancel</Button>
                <Button variant="contained" color="success" onClick={()=>{
                  addFriend()
                  }} disabled={!newPerson?.name?.length || !newPerson?.phone?.length}>Add</Button>
              </DialogActions>
            </Dialog>
      </Box>
      <Box>
        <Snackbar
          open={openSnack.open}
          autoHideDuration={3500}
          onClose={()=>{setOpenSnack(prev=>({...prev,open:false}))}}
        >
            <Alert severity={openSnack.type ? "success" : "error"} sx={{width:"100%",backgroundColor:openSnack.color, color:"#fff"}}>{openSnack.mssg}</Alert>
        </Snackbar>
      </Box>
    </Box>
  )
}

export default Chat