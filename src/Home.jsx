import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { c } = useSelector((state) => state.custom);
  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const addBtn25 = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25,
    });
  };

  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };

  return (
    <div>
      <h2 style={{ display: "flex", justifyContent: "center" }}>{c}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight:"bold",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
          onClick={addBtn}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: "orange",
            fontWeight:"bold",
            // color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
          onClick={addBtn25}
        >
          IncrementBy25
        </button>
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight:"bold",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
          onClick={subBtn}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
