 //chaining  promise
//  function asyncFunc1(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("Success");
//         },4000);
//     });
//  }
//  function asyncFunc2(){
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("Success");
//         },4000);
//     });
//  }

// console.log("fetching data1...");
//  const p1 = asyncFunc1();
//     p1.then(res =>{
//     console.log(res);
//     console.log("fetching data2...");
//     const p2 = asyncFunc2();
//     p2.then((res)=> {
//         console.log(res);
//     })
//  }) ; 







// api handling this part
// const getPromise = ()=> {
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//     });
// };


// we handle this part
// const promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled", res);
// });

// promise.catch((err)=>{
//     console.log("rejected", err);
// });



//chaining promises of previous example getData
   function getData(dataId, getNextData){
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
        console.log("data",dataId);
        resolve("success")
        // reject("data not found")
        if(getNextData){ 
            getNextData();
        }
    }, 5000);
   });
}


//    p1 = getData(1);
//    p1.then((res)=>{
//     console.log("load data2 ...",res);
//     p2 = getData(2);
//     p2.then((res)=>{
//         console.log("load data3...",res);
//         p3 = getData(2);
//         p3.then((res)=>{
//             console.log("final loaded data",res);
//         })
//     });
//    });

//shorten version

getData(1).then((res)=>{
    console.log("data2 loading...");
    return getData(2).then((res)=>{
        console.log("data3 loading ...");
        return getData(3);
    });
})

// for more simplicity we use asyn await;