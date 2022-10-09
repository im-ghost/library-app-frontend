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
query BOOKS {
books {
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

export default function Home() {
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
    router.push("/")
  }
  return (
    <div>
 <Head>
 <title> Books </title>
 <meta name="og:description" content="Books page" />
 <link rel="icon" href="/favicon.ico" />
 </Head>
 <BooksList books={data.books} />
 <Button className="" href="/books/addBook"></Button>
</div>
)
}