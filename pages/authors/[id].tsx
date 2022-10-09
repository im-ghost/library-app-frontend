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
const AUTHOR = gql`
query AUTHOR {
author(id:${router.query.id}) {
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
  } = useQuery(AUTHOR);

  if (loading) {
    return <Loader />
  }

  if (error) {
    console.error(error);
    router.push("/authors")
  }
  const { author } = data
  return (
    <div>
 <Head>
 <title> {data.author.name} </title>
 <meta name="og:description" content="Author page" />
 <link rel="icon" href="/favicon.ico" />
 </Head>
    <div className="authorPage">
     <header className="authorPage__header">
     <Typography className="authorPage__header--text" variant="h1">
     {author.name}
     </Typography>
        <p>
         Born on {new Date(author?.DOB)}.
         Died on {new Date(author?.DOD)}.
    </p>
    </header>
     <main>
     <BooksList books={author.book}/>
     </main>
    </Card>
</div>
)
}