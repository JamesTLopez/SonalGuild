export const updateUser = (values) => {
  
  return {
    type: 'UPDATE_USER',
    payload:{values},
  };
};

export const deleteUser = () => {
  return {
    type: "DELETE_USER",
  };
};

export const addUser = () => {
    return {
      type: "ADD_USER",
    };
  };
  
