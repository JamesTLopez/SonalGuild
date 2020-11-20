export const FIND_POSTS = `query($limit:Int!,$cursor:String){
  posts(limit:$limit,cursor:$cursor){

    id
    title
    createdAt
    creator{
      id
      username
      createdAt
      updatedAt
    }
  }
}`;


export const ME_QUERY =  `{
  me{
    id
    username
    createdAt
  }
}`

export const FIND_POSTSF = `{
  postsf{
    id,
    title,
    description,
    createdAt
  }
}`;
