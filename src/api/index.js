import axios from "axios"

export const login = async (account)=>{
    try {
        const result = await axios.post("http://localhost:5000/user/login",{account})
        if(result){
            return result.data;
        }
        
    } catch (error) {
        console.log(error)
        return null
    }
}

export const signUp = async (account)=>{
    try{
        const result = axios.post("http://localhost:5000/user/signin",{account})
        if(result.data){
            return result.data
        }
        else return null
    }catch(error){
        console.log(error)
        return false
    }   
}

export const getMessages = async (info) =>{
    try {
        const result = await axios.get(`http://localhost:5000/messages/mymessages/?myPhone=${info.myPhone}&recPhone=${info.recPhone}`)
        if(result.data){
            const disc = result.data.me?.concat(result.data.other)
            return disc?.sort((a,b)=> {return a.date-b.date});
        }
        else{
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}

export const sendMessage = async (message) =>{
    try {
        const result = await axios.post("http://localhost:5000/messages/sendmessage",{message})
        if(result){
            return result.data
        }
        else{
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }
}
export const addNewFriend = async (data)=>{
    try {
        const result = await axios.post("http://localhost:5000/user/addfriend",{myPhone:data.myPhone,newFriend:data.newFriend})
        if(result.data){
            return result.data;
        }else{
            return null
        }
    } catch (error) {
        console.log(error)
        return null
    }

}

export const deleteConv = async (data)=>{
    try {
        const result = await axios.post("http://localhost:5000/messages/deleteconv",{data})
        if(result.data){
            return true
        }else{
            return null
        }
    } catch (error) {
        console.log(error);
        return null
    }
}

export const deleteContact = async (data)=>{
    try {
        const result = await axios.post("http://localhost:5000/user/deletecontact",{data})
        if(result.data){
            return result.data
        }else return false
    } catch (error) {
        console.log(error)
        return false
    }
}