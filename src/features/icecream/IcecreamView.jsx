import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderIcecream, restockedIcecream } from "./icecreamSlice";

const IcecreamView = () => {
  const numberOfIcecreams = useSelector((state) => {
    return state.icecreame.numberOfIcecreams;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of icecream - {numberOfIcecreams}</h2>
      <button onClick={() => dispatch(orderIcecream())}>Order icecream </button>
      <button onClick={() => dispatch(restockedIcecream(3))}>
        Restocked icecream{" "}
      </button>
    </div>
  );
};

export default IcecreamView;
