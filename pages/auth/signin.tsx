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

import Loader from "../../components/Loader"

import {
  useQuery,
  gql,
  useMutation
} from "@apollo/client";
const LOGIN_USER = gql`
  mutation loginUser($password:String!,$email: String!) {
    loginUser(password:$password,email:$email) {
      _id
      name,
      password,
      email
    }
  }
`;

const loginUser =({})=>{
    const { user,signin} = useUser()
  const router = useRouter();
  
    const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const initialState={
    email:"",
    password:""
  }
  const login = (e)=>{

    e.preventDefault();
    loginUser({variables:state})
  }
  const reducer = (state,action) =>{
    switch (action.type) {
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
   signin(data.user)
   router.push("/")
 }

  return(
    <div className="signin">
    <Typography variant="h2">
    Let's sign you in
    </Typography>
    <Typography variant="h3">
    Welcome back,we have missed you
    </Typography>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80vw' },
      }}
      className="signin__form"
      noValidate
      autoComplete="off"
    >
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
    
    
     <Button type='submit' onClick={login} className="signin__button">
     <Typography variant="h3">
     Sign In
     </Typography>
     </Button>
    </Box>
    </div>
    )
   }


export default loginUser;







