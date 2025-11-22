const fakeRequest = (url) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("success");
            console.log(`req completed ${url}`);
        },2000)
    })
}

async function getRequest() {
    console.log("..page1")
    await fakeRequest("home.come/page1")
    console.log("..page2")
    await fakeRequest("home.come/page2")
    console.log("..page3")
    await fakeRequest("home.come/page3")
}

getRequest()




//=>> callback
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


//=>> promise
// fakeRequest("home.com/page1")
//     .then((data)=>{
//         console.log(`worked page 1`);
//         console.log(data);
//         return fakeRequest("home.com/page2") 
//     })
//     .then((data)=>{
//         console.log(`worked page 2`);
//         console.log(data);
//         return fakeRequest("home.com/page3") 
//     })
//     .then((data)=>{
//         console.log(`worked page 3`);
//         console.log(data);
//         return fakeRequest("home.com/page4") 
//     })
//     .then((data)=>{
//         console.log(`worked page 4`);
//         console.log(data);
        
//     })
//     .catch((err)=>{
//         console.log("not worked page 1");
//         console.log(err);
//     })