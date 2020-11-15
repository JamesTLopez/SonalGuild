export const FIND_POSTS = `{
    posts{
      id,
      title,
      owner,
      createdAt
    }
  }`;


export const ME_QUERY =  `{
  me{
    id
    username
  }
}`