const changeBGcolor = (color, delay)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}


changeBGcolor('red', 1000)
    .then(() => {return changeBGcolor('green',1000)})
    .then(() => {return changeBGcolor('blue',1000)})
    .then(() => {return changeBGcolor('teal',1000)})
    .then(() => {return changeBGcolor('black',1000)})
    .then(() => {return changeBGcolor('violet',1000)})