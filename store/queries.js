import {
  gql,
  useQuery
} from "@apollo/client"
import {
  useEffect,
  useState
} from "react";

const BOOKS = gql`
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
const AUTHORS = gql`
query AUTHORS {
authors {
name,
_id,
booksIds{
name,
_id
},
DOB
}
}  
`;
const GENRES = gql`
query GENRES {
genres {
name,
_id,
booksIds{
name,
_id
}
}
}  
`;

export const useQueries = () =>{
  const {
    data:books,
    loading:bloading,
    error:berror
  } = useQuery(BOOKS);
  const {
     data:authors,
    loading:aloading,
    error:aerror
  } = useQuery(AUTHORS);
  const {
     data:genres,
    loading:gloading,
    error:gerror
  } = useQuery(GENRES)
  return {
    books,
    bloading,
    berror,
    authors,
    aloading,
    aerror,
    genres,
    gerror,
    gloading
  }
}