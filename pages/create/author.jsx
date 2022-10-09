import Link from "next/link"
import Head from "next/head"
import React,{
  useEffect,
  useReducer,
  useState,
} from "react"
import {
  useRouter
} from "next/router"
import {
  Typography,
  Card,
  Select,
  TextField,
  MenuItem,
  Box,
  Button
  
} from "@mui/material"
import {useStore} from "../../store/store";

import shallow from "zustand/shallow"
import Loader from "../../components/Loader";
import { useAuthorMutation } from "../../store/mutations";

const createAuthor =()=>{ 
  
const useUser = () => {
  const { user,signin, register,updateProfile, signOut} = useStore(
    (store) => ({
      user: store.getUser(),
      signin: store.loginUser,
      register: store.registerUser,
      getProfile:store.getUserProfile,
      signout:store.logoutUser
    }),
    shallow
  )

  return { user,signin, register,updateProfile, signOut }
}
  const  [user,setUser] = useState(null);
   useEffect(()=>{
    const d = useUser()
    setUser(d)
  },[])
  
  const initialState={
    name:"",
    DOB:"",
    ownerId:""
  }
    const {
      addAuthor,
      author,
      aloading, 
      aerror 
      
    } = useAuthorMutation();
  const router = useRouter();

  if (aloading) return <Loader />;
  if (aerror) return `Submission error! ${error.message}`;
 if(author){
   router.push("/authors")
 }

  const create = (e)=>{
    e.preventDefault();
    if(user){
      alert(user)
      createAuthor({
        variables:state
      })
    }else{
      alert(user)
      alert("user is undefined ")
    }}
  const reducer = (state,action) =>{
    switch (action.type) {
      case 'setName':
        return {
          ...state,
          name:action.payload
        }
        break;
      case 'setDOB':
        return {
          ...state,
          DOB:action.payload,
          ownerId:user._id
        }
        break;
      case 'reset':
        return {
         state:initialState
        }
        break;
      
      default:
        return state
    }
  }
  const [state,setState] = useReducer(reducer,initialState)

  return(
    <div className="signin">
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80vw' },
      }}
      className="signin__form"
      autoComplete="on"
    >
    <TextField
    id="Name"
    label="Name "
    placeholder="Name "
    className="signin__form--input" 
     InputProps={{
     value:state.name,
     onChange:(e)=>{
       setState({
       type:"setName",
       payload:e.target.value
       })
     },
 
     }}
     />
    
    <TextField
    id="DOB"
    label="DOB"
    placeholder="DOB"
    className="signin__form--input" 
     InputProps={{
     type:"date",
     value:state.DOB,
     onChange:(e)=>{
       setState({
       type:"setDOB",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
     />
    
    
     <Button type='submit' onClick={create} className="signin__button">
     <Typography variant="h3">
     create
     </Typography>
     </Button>
    </Box>
    </div>
    )
   }


export default createAuthor;







