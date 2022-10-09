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
const GENRE = gql`
query GENRE {
genre(id:${router.query.id}) {
name,
_id,
booksIds{
name,
_id
},
DOB,
DOD
}
}
`;

export default function Books() {
  const router = useRouter();
  const {
    data,
    loading,
    error
  } = useQuery(GENRE);

  if (loading) {
    return <Loader />
  }

  if (error) {
    console.error(error);
    router.push("/authors")
  }
  const {
    genre
  } = data
  return (
    <div>
 <Head>
 <title> {data.genre.name} </title>
 <meta name="og:description" content="Genre page" />
 <link rel="icon" href="/favicon.ico" />
 </Head>
    <div className="authorPage">
     <header className="authorPage__header">
     <Typography className="authorPage__header--text" variant="h1">
     {genre.name}
     </Typography>
    </header>
     <main>
     <BooksList books={genre.book} />
     </main>
    </Card>
</div>
)
}