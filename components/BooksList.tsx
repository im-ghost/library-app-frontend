//
import {
  Container
} from "@mui/material"
import BookListItem from "./BooksListItem"
export default function BooksList( {
  books
}) {
  return(
    <Container className="bookslist">
    {
      books.map(book=><BookListItem book={book} />)
      }
    </Container>
  )
}