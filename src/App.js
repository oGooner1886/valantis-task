import "./App.css";
import React, { useEffect, useState } from "react";
import { API } from "./api/api";

function App() {
  let [items, setItems] = useState([]);
  let [offset, setOffset] = useState(0);
  let result = {};

  useEffect(() => {
    API.getItemIds(offset)
      .then((data) => API.getItems(data.data.result))
      .then((data) => {
        const uniq = () => {
          data.data.result.map((el) => (result[el.id] = el));
          return Object.values(result);
        };
        uniq();
        setItems(result);
        console.log(data.data.result);
      });

    // (async () => {
    //   const response = await API.getItemIds(offset);
    //   const itemsResponse = await API.getItems(response.data.result);
    //   setItems(itemsResponse.data.result);
    // })();

    console.log(items);
  }, [offset]);

  return (
    <div>
      <pre>{JSON.stringify(items, null, 2)}</pre>
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
  );
}

export default App;
