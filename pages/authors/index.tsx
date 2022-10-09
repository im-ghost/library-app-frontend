import Head from 'next/head'
import Image from 'next/image'
import {
  useRouter
} from "next/router";
import AuthorsList from "../../components/AuthorsList";
import {
  useQuery,
  gql
} from "@apollo/client";
import Loader from "../../components/Loader";
const AUTHOR = gql`
query AUTHORS {
authors {
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
  } = useQuery(AUTHOR);

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
 <title> Authors </title>
 <meta name="og:description" content="Authors page" />
 <link rel="icon" href="/favicon.ico" />
 </Head>
 <AuthorsList authors={data.authors} />
 <Button className="" href="/authors/addAuthor"></Button>
</div>
)
}