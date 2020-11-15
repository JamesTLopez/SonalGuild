export const REGISTER_MUTATION = `mutation Register($username:String!,$password:String! ){
    register(options: { username:$username, password: $password }) {
      errors{
        field,
        message
      }
      user{
        id
          createdAt
          username
          updatedAt
      }
    }
  }
  `;

export const CREATE_SONG = `
  mutation Createpost($title:String!,$owner:String! ){
    createPost(title:$title,owner:$owner){
      id,
      title,
      createdAt
      updatedAt
  }
  }`;

export const LOGIN_MUTATION = `mutation Login($username:String!,$password:String!){
  login(options:{username:$username,password:$password}){
    errors{
      field
      message
    }
    user{
      id
      username
    }
  }
}`

export const LOGOUT_MUTATION =`mutation{
  logout
}`