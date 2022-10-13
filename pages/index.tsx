import Head from 'next/head'
import Image from 'next/image'
import  { useRouter } from 'next/router'
import {
  Typography,
  Button,
  Container ,
  Card
} from "@mui/material"


const Home = () =>{
const router= useRouter();
const go = () =>{
  console.log(typeof(router))
  console.log(Object.keys(router))
  //router.push("/books")
}
  return ( <div>
   <Head>
    <title> Library </title> 
    <meta name = "description" content = "Library app home page" /> 
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="/books.jpg"/>
    <meta property="og: description" content="Library app home page"/>
    <link rel = "icon" href = "/favicon.ico" />
   </Head> 
   <Card className="homepage">
     <img src="/books.jpg" className="homepage__image" alt="boks"/>
     <Typography variant="h1" className="homepage__text">
     We grow by learning everyday
     </Typography>
     <Button className="homepage__button" onClick={()=>go()}>
     <Typography variant="h4" className="homepage__button--text">
     Read a Book today 
     </Typography>
     </Button>
     </Card>
  </div>
  )
}
export default Home