import {
  Container,
  Typography,
  Box
} from "@mui/material";
import {useState,useEffect} from "react"
export default function Footer(){
  const [footer,setFooter]= useState([]);
  useEffect(()=>{
    setFooter([
      {text:"books" href="/books"},
      {text:"search" href="/search"},
      {text:"profile" href="/profile"},
      {text:"notifications" href="/notifications"},
      ])
  },[])
  return (
    <Container className="footer">
   { footer.map(foot=>{
    <Box className="footer__item">
    <Link href={foot.href}>
    <Typography variant="h5">
    {foot.text}
</Typography>
</Link>
    </Box>
    })}
    </Container>
    )
}