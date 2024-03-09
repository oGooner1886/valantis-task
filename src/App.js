import "./App.css";
import React, { useEffect, useState } from "react";
import { API } from "./api/api";
import Header from "./components/Header";
import Context from "./Context/Context";
import { Container, Pagination } from "@mui/material";
import GoodsList from "./components/GoodsList/GoodsList";
import SearchForm from "./components/SearchForm/SearchForm";
import Preloader from "./components/Preloader/Preloader";
function App() {
  const [items, setItems] = useState([]);
  const [brands, setBrands] = useState([]);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [qtyItems, setQtyItems] = useState(0);
  const [listItems, setListItems] = useState(10);
  const pages = Math.ceil(qtyItems / 50);

  useEffect(() => {
    let sortBrand;
    let product;
    let list;
    API.getItemIds(offset)
      .then((data) => {
        setLoading(true);
        return API.getItems(data.data.result);
      })
      .then((data) => {
        (() => {
          product = [
            ...new Map(data.data.result.map((el) => [el.id, el])).values(),
          ];
        })();
        setItems(product);
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "500") {
          API.getItemIds();
        }
      });

    API.getQtyItems().then((data) => {
      setQtyItems(data.data.result.length);
    });

    // API.getFields().then((data) => {
    //   (() => {
    //     sortBrand = data.data.result.reduce((acc, item) => {
    //       if (acc.includes(item)) {
    //         return acc;
    //       }
    //       return [...acc, item];
    //     }, []);
    //     setBrands(sortBrand);
    //   })();
    // });
    // (async () => {
    //   const response = await API.getItemIds(offset);
    //   const itemsResponse = await API.getItems(response.data.result);
    //   setItems(itemsResponse.data.result);
    // })();
  }, [offset]);

  useEffect(() => {
    let product;
    let list;
    API.getFilter(search)
      .then((data) => {
        return API.getItems(data.data.result);
      })
      .then((data) => {
        setFiltered(true);
        (() => {
          product = [
            ...new Map(data.data.result.map((el) => [el.id, el])).values(),
          ];
          list = product.slice(0, listItems);
        })();
        console.log(list);
        setItems(list);
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "500") {
          API.getFilter(search);
        }
      });
  }, [search, listItems]);

  const handleChange = (e) => {
    // e.preventDefault();
    if (!e.target.value) {
      setItems(items);
      setSearch("");
      return;
    }
    setSearch(e.target.value);
  };
  const handleShowNextPage = () => {
    setListItems(listItems + 10);
  };
  const valueContext = {
    items,
    setOffset,
    brands,
    search,
    handleChange,
    handleShowNextPage,
  };

  return (
    <Context.Provider value={valueContext}>
      <Header />

      {loading && items.length === 0 ? (
        <Preloader />
      ) : (
        <Container>
          <SearchForm />
          <GoodsList />
          {!filtered && (
            <Pagination
              color="primary"
              count={pages}
              onChange={() => setOffset(50)}
              sx={{ display: "flex", justifyContent: "center", m: "25px 0 " }}
            />
          )}
        </Container>
      )}
    </Context.Provider>
  );
}

export default App;
