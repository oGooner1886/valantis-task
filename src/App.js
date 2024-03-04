import "./App.css";
import React, { useEffect, useState } from "react";
import { API } from "./api/api";
import Header from "./components/Header";
import Context from "./Context/Context";
import PaginationContainer from "./components/Pagination/PaginationContainer";
import { Container } from "@mui/material";
import GoodsList from "./components/GoodsList/GoodsList";
function App() {
  let [items, setItems] = useState([]);
  let [offset, setOffset] = useState(0);
  let result = {};

  useEffect(() => {
    API.getItemIds(offset)
      .then((data) => {
        return API.getItems(data.data.result);
      })
      .then((data) => {
        (() => {
          data.data.result.map((el) => (result[el.id] = el));
          return Object.values(result);
        })();
        setItems(result);
      });

    // (async () => {
    //   const response = await API.getItemIds(offset);
    //   const itemsResponse = await API.getItems(response.data.result);
    //   setItems(itemsResponse.data.result);
    // })();
  }, [offset]);
  const valueContext = {
    items,
    setOffset,
  };

  return (
    <Context.Provider value={valueContext}>
      <Header />
      <Container>
        <GoodsList />
        {/* <pre>{JSON.stringify(items, null, 2)}</pre> */}
        <PaginationContainer />
      </Container>
    </Context.Provider>
  );
}

export default App;
