process.on("exit", code=> {

    console.log(`about to exit with code: ${code}`);

});

process.on("uncaughtException", err => {
    
    //something went unhandled

    
    console.error('Hello there');

    //force exit the process too.
    process.exit(1);
});

//keep the event loop busy
process.stdin.resume();

// type error exception
console.dog();