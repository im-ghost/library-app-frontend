import Head from 'next/head'
import Image from 'next/image'
import {
  useRouter
} from "next/router";
import GenresList from "../../components/GenresList";
import {
  useQuery,
  gql
} from "@apollo/client";
import Loader from "../../components/Loader";
const GENRE = gql`
query GENRES {
genres {
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

export default function Home() {
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
    router.push("/")
  }
  return (
    <div>
 <Head>
 <title> Genres </title>
 <meta name="og:description" content="Genres page" />
 <link rel="icon" href="/favicon.ico" />
 </Head>
 <GenresList genres={data.genres} />
 <Button className="" href="/genres/addGenre"></Button>
</div>
)
}