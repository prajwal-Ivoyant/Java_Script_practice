const fakeRequest = (url) =>{
    return new Promise((resolve, reject)=>{
        const delay = Math.floor(Math.random()*4500 +3000 )
        setTimeout(()=>{
            if(delay > 4000) reject(`error!!! ${url}`);
            else{
                resolve(`resolved => > > ${url}`)
            }
        },delay)
    })
}


// fakeRequest("home.com/page1")
//     .then((data)=>{
//         console.log(`worked page 1`);
//         console.log(data);
//         return fakeRequest("home.com/page2")
//             .then((data)=>{
//                 console.log(`worked page 2`);
//                 console.log(data);
//             })
//             .catch((err)=>{
//                 console.log("not worked page 2");
//                 console.log(err);
//             })
//     })
//     .catch((err)=>{
//         console.log("not worked page 1");
//         console.log(err);
//     })


fakeRequest("home.com/page1")
    .then((data)=>{
        console.log(`worked page 1`);
        console.log(data);
        return fakeRequest("home.com/page2") 
    })
    .then((data)=>{
        console.log(`worked page 2`);
        console.log(data);
        return fakeRequest("home.com/page3") 
    })
    .then((data)=>{
        console.log(`worked page 3`);
        console.log(data);
        return fakeRequest("home.com/page4") 
    })
    .then((data)=>{
        console.log(`worked page 4`);
        console.log(data);
        
    })
    .catch((err)=>{
        console.log("not worked page 1");
        console.log(err);
    })