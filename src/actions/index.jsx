export const addToDo = (data) => {
  console.log(data, "actiontodo");
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const editToDo = (id, newData) => {
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      newData: newData,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};
