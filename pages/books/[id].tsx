import Head from 'next/head'
import Image from 'next/image'
import {
  useRouter
} from "next/router";
import BooksList from "../../components/BooksList";
import {
  useQuery,
  gql
} from "@apollo/client";
import Loader from "../../components/Loader";
const BOOK = gql`
query BOOK {
book(id:${router.query.id}) {
name,
_id,
authorId{
name,
_id
},
genreId{
name,
_id
},
DOB,
content
}
}
`;

export default function Books() {
  const router = useRouter();
  const {
    data,
    loading,
    error
  } = useQuery(BOOK);

  if (loading) {
    return <Loader />
  }

  if (error) {
    console.error(error);
    router.push("/books")
  }
  const {book} = data
  return (
    <div>
 <Head>
 <title> {data.book.name} </title>
 <meta name="og:description" content="Book page" />
 <link rel="icon" href="/favicon.ico" />
 </Head>
    <div className="bookPage">
     <header className="bookPage__header">
     <Typography className="bookPage__header--text" variant="h1">
     {book.name}
     </Typography>
        <p>
         written on {new Date(book?.DOB)}
    </p>
    </header>
     <main>
     <Link href={ {
        pathname: "/authors/[id]",
        query: {
          id: book.authorId._id
        }
      }}>
     <Typography variant='h4'>
   written by {book.authorId.name}
     </Typography>
    </Link>
     <Link href={ {
        pathname: "/genres/[id]",
        query: {
          id: book.genreId._id
        }
      }}>
     <Typography variant='h4'>
   trending in {book.genreId.name}
     </Typography>
    </Link>
     <Typography variant="h5">
        {book?.content}
        </Typography>
     </main>
    </Card>
</div>
)
}