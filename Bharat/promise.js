function f1()
{
  return  new Promise((res,rej)=>{
        setTimeout(res,4000,"good");
    })   
}

function f2()
{
     return new Promise((res,rej)=>{
        setTimeout(res,6000,"good1");
    })   
}

function f3()
{
  return    new Promise((res,rej)=>{
        setTimeout(res,2500,"good2");
    })   
}

function f4()
{
  return  new Promise((res,rej)=>{
        setTimeout(rej,2000,"bad");
    })   
}



var arr = [f1(),f2(),f3(),f4()];
// This willrun
// Promise.all(arr)
//         .then((v)=>{console.log(v)})
//         .catch((e)=>{console.log(e)});

//  this will run 
// Promise.allSettled(arr)
//        .then((v)=>{console.log(v)})
//        .catch((e)=>{console.log(e)});


Promise.any(arr)
       .then((v)=>{console.log(v)})
       .catch((e)=>{console.log(e)});

// Promise.race(arr)
//        .then((v)=>{console.log(v)})
//        .catch((e)=>{console.log(e)});