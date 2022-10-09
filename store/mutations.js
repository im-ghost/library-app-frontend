import {
  gql,
  useMutation
} from "@apollo/client"
const ADD_AUTHOR = gql`
  mutation ADD_AUTHOR($name:String!,$DOD:Date!,$ownerId: String!) {
    addAuthor(name:$name,DOB:$dob,ownerId:$id) {
      _id
      name,
      DOB,
      DOD,
      ownerId
    }
  }

`;
const ADD_GENRE = gql`
  mutation addGenre($name:String!,$ownerId: String!) {
    addGenre(name:$name,ownerId:$id) {
      _id
      name,
      ownerId
    }
  }`;
const ADD_BOOK = gql`

  mutation addBook($name:String!,$authorId:String!,$content:String!,$DOB:Date!,$genreId:String!) {
    addBook(name:$name,authorId:$authorId,content:$content,DOB:$DOB,genreId:$genreId) {
      _id
      name,
      DOB,
      genreId{
        name,
        _id
      },
      authorId{
        name,
        _id
      }
    }
  }
`;
export const useBookMutation = () =>{
  const [addBook,{
      data:book,
      loading:bloading,
      error:berror
    }] = useMutation(ADD_BOOK)
    return {
      addBook,
      bloading,
      berror,
      book
    }
}
export const useGenreMutation = () =>{
  const [addGenre,{
      data:genre,
      loading:gloading,
      error:gerror
    }] = useMutation(ADD_GENRE)
    return{
      gerror,
      gloading,
      genre,
      addGenre
    }
}
export const useAuthorMutation = () =>{
    
    const [addAuthor,{
      data:author,
      loading:aloading,
      error:aerror
    }] = useMutation(ADD_AUTHOR)
    
    return {
      aloading,
      aerror,
      author,
      addAuthor
    }
}