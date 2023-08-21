const initialData = {
  dataList: [],
};
const todoReducers = (state = initialData, action) => {
  console.log(state, action, "action and data");
  switch (action.type) {
    case "ADD_TODO":
      const { id, data } = action.payload;
      return {
        // dataList: [
        //   ...state.dataList,
        //   {
        //     id: id,
        //     data: data,
        //   },
        // ],
        ...state,
        dataList: [
          ...state.dataList,
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE_TODO":
      const dataAfterdeletion = state.dataList.filter(
        (ele) => ele.id !== action.id
      );
      return {
        ...state,
        dataList: dataAfterdeletion,
      };

    case "EDIT_TODO":
      const editedDataList = state.dataList.map((ele) => {
        if (ele.id === action.payload.id) {
          return {
            ...ele,
            data: action.payload.newData,
          };
        }
        return ele;
      });
      return {
        ...state,
        dataList: editedDataList,
      };
    default:
      return state;
  }
};

export default todoReducers;
