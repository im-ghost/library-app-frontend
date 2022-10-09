//
import {
  Container
} from "@mui/material"
import GenreListItem from "./GenresListItem"
export default function GenresList( {
  genres
}) {
  return(
    <Container className="genreslist">
    {
      genres.map(genre=><GenreListItem genre={genre} />)
      }
    </Container>
  )
}