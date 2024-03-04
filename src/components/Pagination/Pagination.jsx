import React from 'react'

const Pagination = ({setOffset}) => {
  return (
    <div>
      <button
        onClick={() => {
          setOffset((prevOffSet) => prevOffSet - 5);
        }}
      >
        {"<"}
      </button>
      <button
        onClick={() => {
          setOffset((prevOffSet) => prevOffSet + 5);
        }}
      >
        {">"}
      </button>
    </div>
  )
}

export default Pagination
