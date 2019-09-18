const querystring = require("querystring");

console.log(
    querystring.stringify({
        name: "abdullah Khan",
        website: "jsComp.com/abdullah-khan"
    })
);


console.log(
    querystring.parse("name=abdullah%20khan&website=jsComp.com%2Fabdullah-khan")

);