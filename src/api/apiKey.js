const md5 = require("md5");
const pass = "Valantis";
const timeStamp = new Date().toJSON().slice(0, 10).split("-").join("");

export const secretKey = md5(`${pass}_${timeStamp}`);
