import React from "react";
import style from "./Pagination.module.css";
import ButtonOnUp from "../ButtonOnUp";
const Pagination = ({ setOffset }) => {
  return (
    <>
    <ButtonOnUp/>
    <div className={style.pagination}>
      <button
        className={style.button}
        onClick={() => {
          setOffset((prevOffSet) => prevOffSet - 50);
        }}
      >
        <span>{"<"}</span>
      </button>
      <button
        className={style.button}
        onClick={() => {
          setOffset((prevOffSet) => prevOffSet + 50);
        }}
      >
        <span>{">"}</span>
      </button>
      
    </div>
    
    </>
  );
};

export default Pagination;
