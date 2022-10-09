//
import Link from "next/link";
import {
  Typography,
  Card
} from "@mui/material"
export default function BookListItem( {
  book
}) {
  return(
    <Link href={ {
      pathname: "/books/[id]",
      query: {
        id: book._id
      }
    }}>
    <div className="booklistitem">
     <header className="booklistitem__header">
     <Typography className="booklistitem__header--text" variant="h1">
     {book.name}
     </Typography>
      </header>
     <main>
     <Link href={ {
          pathname: "/authors/[id]",
          query: {
            id: book.authorId._id
          }
        }}>
     <Typography variant='h4'>
    by {book.authorId.name}
     </Typography>
    </Link>
     <Typography variant="h5">
        {book?.content?.slice(0, 10)}...
        </Typography>
        <p>
          {book?.DOB}
        </p>
     </main>
    </div>
    </Link>
  )
}