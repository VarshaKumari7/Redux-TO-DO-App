import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo, editToDo } from "../../actions";
import "./h.css";
import Inputfield from "../inputfield";
import Button from "../Button";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.dataList);
  const example = useSelector((state) => state);
  console.log(example, "list");

  const formInput = (event) => {
    setInputData(event.target.value);
    // console.log("object,", event.target.value);
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <div className="top-section">
          <Inputfield
            type={"text"}
            placeholder={"What needs to be done?"}
            value={inputData}
            onChange={formInput}
          />
          <Button
            title={"Add task"}
            onClick={() => dispatch(addToDo(inputData), setInputData(""))}
          />
        </div>
        <div className="bottom-section">
          {list.map((elem) => {
            return (
              <div className="items-row" key={elem.id}>
                <div className="check-box">
                  <input type="checkbox" />
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
                    onClick={() => dispatch(editToDo(elem.id))}
                  />
                </div>
                <div className="delete-icon img">
                  <img
                    src="https://icon-library.com/images/delete-icon-png/delete-icon-png-19.jpg"
                    alt="img"
                    onClick={() => dispatch(deleteToDo(elem.id))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
