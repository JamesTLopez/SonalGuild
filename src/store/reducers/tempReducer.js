const initState = {
  title: "Harrison",
  posts: [
    {
      id: 1,
      name: "Terry",
      email: "TheOnlyTerry@gmail.com",
      phone: "252-231-5432",
    },
    {
      id: 2,
      name: "Timmy Lsao",
      email: "LsaoBaoChao@gmail.com",
      phone: "432-341-8347",
    },
    {
      id: 3,
      name: "Karl Shen",
      email: "KarlWithaK@gmail.com",
      phone: "543-331-3341",
    },
  ],
};

const tempReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POSTS":
    
      return {
        ...state
      };
    case "DELETE_POST":
      console.log("DELETE Loardy");
      return {
        ...state,
       posts:state.posts.filter((post) => post.id !== action.payload)
      };
    case "ADD_POST":
      console.log("ADD Loardy");
      return {
        ...state,
        posts:[...state.posts,action.payload]
      };
    default:
      return state;
  }
};

export default tempReducer;
