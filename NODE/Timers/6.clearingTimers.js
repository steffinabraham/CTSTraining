const func = () => {
    console.log('HELlo after 4 seconds');
};

setTimeout(func, 4 * 1000);


//For: func(arg1, arg2, arg3, ....)

clearTimeout(func);