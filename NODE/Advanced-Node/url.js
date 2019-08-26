const url = require("url");

const urlString = "https://www.abdullah.com/search?q=khan";

console.log(url.parse(urlString, true));

const urlObject = {
    protocol: "https",
    host: "www.abdullah.com",
    search: "?q=khan",
    pathname: "/search",

};

console.log(url.format(urlObject));