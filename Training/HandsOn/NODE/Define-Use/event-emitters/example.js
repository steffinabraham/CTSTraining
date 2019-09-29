const EventEmitter = require("events")









myEmitter.on("TEST_EVENT", () => {
    console.log("Test_EVENT was fired");
});

myEmitter.on("TEST_EVENT", () => {
    console.log("TEST_EVENT was fired")
})