//
import {
  Container
} from "@mui/material"
import AuthorListItem from "./AuthorsListItem"
export default function AuthorsList( {
  authors
}) {
  return(
    <Container className="authorslist">
    {
      authors.map(author=><AuthorListItem author={author} />)
      }
    </Container>
  )
}