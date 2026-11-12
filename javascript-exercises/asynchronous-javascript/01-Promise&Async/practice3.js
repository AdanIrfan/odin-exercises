// async return a promise 
// await stop the entire program untill it receive the promise

// function api(){
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             console.log("Weather data");
//             resolve(200);
//         },2000);
//     });
// }

// async function GetWeatherData(){
//     await api();
//     await api();
// }


// now check the getData example 

const getData = (dataId)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Data", dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
    await getData(7);
    await getData(8);
}