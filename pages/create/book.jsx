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
import shallow from "zustand/shallow"
import {
  useQuery,
  gql
} from "@apollo/client";
import Loader from "../../components/Loader"
import {useQueries} from "../../store/queries";
import {useMutations} from "../../store/mutationss";
const createBook =({})=>{
  const router = useRouter();
  const {user} = useUser()
  
  const {
    authors,
   aloading,
   aerror,
  genres,
   gloading,
    gerror,
  } = useQueries()
    const {
 addBook,
 book,
 bloading,
 berror
  } = useMutations();

  if (gerror) {
    console.error(gerror);
    router.push("/")
  }

  if (aerror) {
    console.error(aerror);
    router.push("/")
  }
    const user =useStore((state)=>state.user)
  const initialState={
    name:"",
    DOB:"",
    content:"",
    authorId:"",
    genreId:"",
    ownerId:user._id
  }
  if (loading) return <Loader />;
  if (berror) return `Submission error! ${berror.message}`;
 if(book){
   router.push("/books")
 }

  const create = (e)=>{

    e.preventDefault();
    if(user){
      createBook({variables:state})
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
      case 'setContent':
        return {
          ...state,
          contenr:action.payload
        }
        break;
      case 'setGenreId':
        return {
          ...state,
          genreId:action.payload
        }
        break;
      case 'setAuthorId':
        return {
          ...state,
          authorId:action.payload
        }
        break;
      case 'setDOB':
        return {
          ...state,
          DOB:action.payload
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
const [authors, setAuthors]= useState([{
  name:"Loading authors "
}])
const [genres, setGenres]= useState([{
  name:"Loading genres"
}])
if(genres){
  setGenres(genres)
}
if(authors){
  const allAuthors = authors;
  const iAmDAdmin = allAuthors.filter((author)=>author.ownerId===user._id)
  setAuthors(iAmDAdmin)
}
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
     value:state.Name,
     onChange:(e)=>{
       setState({
       type:"setName",
       payload:e.target.value
       })
     },
 
     }}
     />
    
    
    <TextField
    id="Name"
    label="Name "
    placeholder="Name "
    className="w-full roundedprops" 
     InputProps={{
     value:state.Name,
     onChange:(e)=>{
       setState({
       type:"setName",
       payload:e.target.value
       })
     },
 
     }}
     />
    
     <TextField
          id=""
          select
          label="Author"
          InputProps={{
     value:state.authorId,
     onChange:(e)=>{
       setState({
       type:"setAuthorId",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
          helperText="Please select an Author"
        >
          {authors.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
    
     <TextField
          id=""
          select
          label="Genre"
          InputProps={{
     value:state.genreId,
     onChange:(e)=>{
       setState({
       type:"setGenreId",
       payload:e.target.value
       })
     },
    
       variant:"standard"
     }}
          helperText="Please select an Genre"
        >
          {genres.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
    <TextField
    id="DOB"
    label="DOB"
    placeholder="DOB"
    className="w-full roundedprops" 
     InputProps={{
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
    
    
     <Button type='submit' onClick={create}>
     <Typography variant="h3">
     create
     </Typography>
     </Button>
    </Box>
    </div>
    )
   }


export default createBook;







