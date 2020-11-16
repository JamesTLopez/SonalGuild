export const FIND_POSTS = `{
    posts{
      id,
      title,
      description,
      createdAt
    }
  }`;


export const ME_QUERY =  `{
  me{
    id
    username
    createdAt
  }
}`