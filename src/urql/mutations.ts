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

export const CREATE_SONG = `mutation CreatePost($title:String!,$description:String!,$key:String!,$scaleType:String!){
  createPost(input:{title:$title,description:$description,key:$key,scaleType:$scaleType}){
    id
    title
    description
    createdAt
    createdAt
  }
}`;

export const DELETE_SONG = `mutation DeletePost($id:Int!){
  deletePost(id:$id)
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
}`;

export const LOGOUT_MUTATION = `
mutation{
  logout
}`;

export const UPDATE_DESCRIPTION = `mutation updateDescription($id:Int!,$description:String!){
  updateDescription(id:$id,description:$description){
    id
    title
    description
  }
}`;
