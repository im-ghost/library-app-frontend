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
import {useStore} from "../../store/store";
import shallow from "zustand/shallow"
import {
  useQuery,
  gql
} from "@apollo/client";
import Loader from "../../components/Loader"
const ADD_Genre = gql`
  mutation addGenre($name:String!,$ownerId: String!) {
    addGenre(name:$name,ownerId:$id) {
      _id
      name,
      ownerId
    }
  }
`;

const useUser = () => {
  const { user,signin, register,updateProfile,getProfile, signOut} = useStore(
    (store) => ({
      user: store.getUser,
      signin: store.loginUser,
      signup: store.registerUser,
      getProfile:store.getUserProfile,
      updateProfile:store.updateUserProfile,
      signout:store.logoutUser
    }),
    shallow
  )

  return { user,signin, register,updateProfile,getProfile, signOut }
}
const createGenre =({})=>{
  const router = useRouter();
  const {user} = useUser()
  const initialState={
    name:"",
    ownerId:user._id
  }
    const [addGenre, { data, loading, error }] = useMutation(ADD_Genre);

  if (loading) return <Loader />;
  if (error) return `Submission error! ${error.message}`;
 if(data){
   router.push("/genres")
 }

  const create = (e)=>{

    e.preventDefault();
    if(user){
    createGenre({variables:state})
      
    }
    
  }
  const reducer = (state,action) =>{
    switch (action.type) {
      case 'setName':
        return {
          ...state,
          name:action.payload
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
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80vw' },
      }}
      className="flex w-screen flex-col justify-center w-scree"
      noValidate
      autoComplete="off"
    >
    <TextField
    id="Name"
    label="Name "
    placeholder="Name "
    className="w-full roundedprops" 
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
    
     <Button type='submit' onClick={create}>
     <Typography variant="h3">
     create
     </Typography>
     </Button>
    </Box>
    </div>
    )
   }


export default createGenre;







