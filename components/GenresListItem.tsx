//
import Link from "next/link";
import {
  Typography,
  Card
} from "@mui/material"
export default function GenreListItem( {
  genre
}) {
  return(
    <Link href={ {
      pathname: "/genres/[id]",
      query: {
        id: genre._id
      }
    }}>
    <div className="genrelistitem">
     <header className="genrelistitem__header">
     <Typography className="genrelistitem__header--text" variant="h1">
     {genre.name}
     </Typography>
      </header>
     <main>
        <p>
         Born on {genre?.DOB}.Wrote {genre.booksIds.length} books
        </p>
     </main>
    </div>
    </Link>
  )
}