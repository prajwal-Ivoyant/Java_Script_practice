// call back

// makerequest (()=>{

// },
// ()=>{

// });

const fakecallback = ((url, success, failure)=>{
    const delay = Math.floor(Math.random()*4500 +500 )
//delay = 4301;
    setTimeout(()=>{
        if(delay > 4000){
            failure(`timeout bey bey ${url}`);
        }else{
            success(`worked ${url}`)
        }
    }, delay)

})


// fakecallback('hello.com/page1',
//     (data)=>{
//     console.log('call back success');
//     console.log(data);
// }, (data)=>{
//     console.log(`call back fail`);
//     console.log(data);
// });


fakecallback('hello.com/page1',
    (data)=>{
    console.log('call back success');
    console.log(data);
            fakecallback('hello.com/page2',
            (data)=>{
            console.log('call back success');
            console.log(data);
                        fakecallback('hello.com/page3',
                    (data)=>{
                    console.log('call back success');
                    console.log(data);
                        
                }, (err)=>{
                    console.log(`call back fail`);
                    console.log(err);
                });
        }, (err)=>{
            console.log(`call back fail`);
            console.log(err);
        });
}, (err)=>{
    console.log(`call back fail`);
    console.log(err);
});