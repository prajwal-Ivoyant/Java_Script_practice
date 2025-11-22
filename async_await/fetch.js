fetch("https://swapi.info/api/people/1")
    .then((res)=>{
        console.log("resolved =>>>",res);
        return res.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
