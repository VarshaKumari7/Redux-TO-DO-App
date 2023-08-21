import React from "react";
import { useSelector } from "react-redux";
const Task = ({ type, className = "checkbox" }) => {
  const list = useSelector((state) => state.todoReducers.dataList);
  return (
    <>
      {list.map((elem) => {
        return (
          <div className="items-row" key={elem.id}>
            <div className="check-box">
              <input className={className} type={type} />
            </div>
            <div className="todos">
              <span>{elem.data}</span>
            </div>
            <div className="deadline">
              <span>Deadline in few minutes</span>
            </div>
            <div className="edit-icon img">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6065/6065488.png"
                alt="img"
              />
            </div>
            <div className="delete-icon img">
              <img
                src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg"
                alt="img"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Task;
