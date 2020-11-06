const initState = {
  id:1,
  username: "Harrison",
  firstName:'John',
  lastName:'Harrison',
  email:"TheOneFordGuy@hotmail.com"
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      let {values} = action.payload;
    

      return {
        ...state,
        values
      };
    case "DELETE_USER":
      console.log("DELETE Loardy");
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "ADD_USER":
      console.log("ADD Loardy");
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      console.log('kess')
      return state;
  }
};

export default userReducer;
