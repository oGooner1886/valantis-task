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

  const [filteredItems, setFilteredItems] = useState([]);
  const [filtered, setFiltered] = useState(false);
  const [listItems, setListItems] = useState(50);

  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);


  const [qtyItems, setQtyItems] = useState(0);

  const step = 50;
  const pages = Math.ceil(qtyItems / step);
  const filteredPages = Math.ceil(qtyItems / step);
  const paginItems = filteredItems.slice(listItems - 50, listItems);

  useEffect(() => {
    let sortBrand;
    let product;

    !filtered &&
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
          if (err.response.status === 500) {
            API.getItemIds();
          }
        });

    API.getQtyItems().then((data) => {
      setQtyItems(data.data.result.length);
    });

    API.getFields()
      .then((data) => {
        (() => {
          sortBrand = data.data.result.reduce((acc, item) => {
            if (acc.includes(item)) {
              return acc;
            }
            return [...acc, item];
          }, []);
          setBrands(sortBrand);
        })();
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 500) {
          API.getItemIds();
        }
      });
  }, [offset, filtered]);

  useEffect(() => {
    let product;
    !!filtered &&
      API.getFilter(search)
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
          setFilteredItems(product);
          setQtyItems(product.length);
        })

        .catch((err) => {
          console.log(err);
          if (err.message) {
            API.getFilter(search);
          }
        });
  }, [search, filtered, qtyItems]);

  const handleChange = (e) => {
    console.log(e);

    if (!e.target.value) {
      setItems(items);
      setSearch("");
      setFiltered(false);
      return;
    }
    setFiltered(true);
    setSearch(e.target.value);
  };

  const handleShowNextPage = (n) => {
    setListItems(n * step);
  };

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };
  const valueContext = {
    items,
    setOffset,
    brands,
    search,
    handleChange,
    filtered,
    filteredItems,
    paginItems,
    open,
    toggleDrawer
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
              onChange={(_, n) => setOffset(step * (n - 1))}
              sx={{ display: "flex", justifyContent: "center", m: "25px 0 " }}
            />
          )}
          {!!filtered && (
            <Pagination
              color="primary"
              count={filteredPages}
              onChange={(_, n) => handleShowNextPage(n)}
              sx={{ display: "flex", justifyContent: "center", m: "25px 0 " }}
            />
          )}
        </Container>
      )}
    </Context.Provider>
  );
}

export default App;
