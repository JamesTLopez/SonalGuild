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