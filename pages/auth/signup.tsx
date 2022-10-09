import Link from "next/link"
import Head from "next/head"
import React,{
  useEffect,
  useReducer,
  useState,
  
} from "react"
import  {useRouter} from "next/router"
import {
  Typography,
  Card,
  Select,
  TextField,
  MenuItem,
  Box,
  Button
  
} from "@mui/material"

import {useUser} from "../../store/store";
import {
  useQuery,
  gql,
  useMutation
} from "@apollo/client";
import Loader from "../../components/Loader"

const ADD_User = gql`
  mutation addUser($name:String!,$password:String!,$email: String!) {
    addUser(name:$name,password:$password,email:$email) {
      _id
      name,
      password,
      email
    }
  }
`;

const CreateUser =({})=>{
  const { register,user} = useUser()
  const router = useRouter();
  
  const initialState={
    name:"",
    email:"",
    password:"",
    password2:""
  }
  
    const [addUser, { data, loading, error }] = useMutation(ADD_User);

  const create = (e)=>{

    e.preventDefault();
    addUser({variables:state})
    
  }
  const reducer = (state,action) =>{
    switch (action.type) {
      case 'setName':
        return {
          ...state,
          name:action.payload
        }
        break;
      case 'setEmail':
        return {
          ...state,
          email:action.payload
        }
        break;
      case 'setPassword':
        return {
          ...state,
          password:action.payload
        }
        break;
      case 'setPassword2':
        return {
          ...state,
          password2:action.payload
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

  if (loading) return <Loader />;
  if (error) return `Submission error! ${error.message}`;
 if(data){
   localStorage.setItem("libray-user",data.user)
   register(data.user)
   router.push("/")
 }

  return(
    <div className="signin">
    <Typography variant='h2'>
    Welcome esteemed guest
    </Typography>
   
    <Typography variant='h3'>
    let's sign you up
    </Typography>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80vw' },
      }}
      className="sign__form"
      noValidate
      autoComplete="on"
    >
    <TextField
    id="name"
    label="Name"
    placeholder="Full Name"
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
    id="email"
    label="Email "
    placeholder="Email address"
    className="signin__form--input" 
     InputProps={{
     value:state.email,
     onChange:(e)=>{
       setState({
       type:"setEmail",
       payload:e.target.value
       })
     },
 
     }}
     />
    
    <TextField
    id="password"
    label="Password"
    placeholder="Password"
    className="signin__form--input" 
     InputProps={{
     value:state.password,
     onChange:(e)=>{
       setState({
       type:"setPassword",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
     />
    
    <TextField
    id="password2"
    label="Confirm Password"
    placeholder="Confirm password"
    className="signin__form--input" 
     InputProps={{
     value:state.password2,
     onChange:(e)=>{
       setState({
       type:"setPassword2",
       payload:e.target.value
       })
     },
    
     }}
     />
    
     <Button type='submit' onClick={create} className="sign__button">
     <Typography variant="h5">
     Create
     </Typography>
     </Button>
    </Box>
    </div>
    )
   }


export default CreateUser;







