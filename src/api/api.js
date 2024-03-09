import axios from "axios";
import { secretKey } from "./apiKey";

export const instance = axios.create({
  baseURL: "http://api.valantis.store:40000",
  headers: {
    "X-Auth": secretKey,
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, X-Requested-With, X-Auth",
  },
});

export const API = {
  getItemIds(offset) {
    return instance.post("/", {
      action: "get_ids",
      params: {
        offset,
        limit: 50,
      },
    });
  },
  getItems(itemsId) {
    return instance.post("/", {
      action: "get_items",
      params: { ids: itemsId },
    });
  },
  getFields() {
    return instance.post("/", {
      action: "get_fields",
      params: { field: "brand" },
    });
  },
  getFilter(search) {
    return instance.post("/", {
      action: "filter",
      params: { product: search },
    });
  },
  getQtyItems() {
    return instance.post("/", {
      action: "get_ids",
      params: {},
    });
  },
};
