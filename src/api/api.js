import axios from "axios";
import { secretKey } from "./apiKey";

export const instance = axios.create({
  baseURL: "https://api.valantis.store:41000",
  headers: { "X-Auth": secretKey, "Content-Type": "application/json" },
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
};
