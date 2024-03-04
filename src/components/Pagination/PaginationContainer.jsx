import React, { useContext } from "react";
import Context from "../../Context/Context";
import Pagination from "./Pagination";


const PaginationContainer = () => {
  const value = useContext(Context);
  const { setOffset } = value;
  return <Pagination setOffset={setOffset} />;
};

export default PaginationContainer;
