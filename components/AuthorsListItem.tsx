//
import Link from "next/link";
import {
  Typography,
  Card
} from "@mui/material"
export default function AuthorListItem( {
  author
}) {
  return(
    <Link href={ {
      pathname: "/authors/[id]",
      query: {
        id: author._id
      }
    }}>
    <div className="authorlistitem">
     <header className="authorlistitem__header">
     <Typography className="authorlistitem__header--text" variant="h1">
     {author.name}
     </Typography>
      </header>
     <main>
        <p>
         Born on {author?.DOB}.Wrote {author.booksIds.length} books
        </p>
     </main>
    </div>
    </Link>
  )
}