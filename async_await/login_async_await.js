const login = (username, password)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!username || !password){
            console.log('error')
            reject ("missing credentials");
            }
            if(password === "pp@123"){
                console.log("successfully logged in");
                resolve ("wellcome back");
            }else{
                reject(`wrong credentials`);
            }
        },2000);
    })
}

(async function (){
    try{
        console.log(`...loding`)
        let msg = await login("prajwal");
        //let msg = await login("pp", "pj@123");
        // let msg = await login("pp", "pp@123");
        console.log(msg)
    }catch(err){
        console.log("try again later")
        console.log(err)
    }
})();



