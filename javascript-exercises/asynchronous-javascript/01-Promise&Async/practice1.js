function getData(dataId, getNextData){
    setTimeout(() =>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 4000);
}
//callback hell 
getData(1,() => {
    console.log("getting data2...");
    getData(2, ()=>{
        console.log("getting data3...")
        getData(3); 
    });
});

//Difficult to understand solution promises