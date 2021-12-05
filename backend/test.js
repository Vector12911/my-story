// const testFunction = ()=>{
//     var body={a:"amrit",b:'sharma'};
//     return body;
// }

// module.exports = {testFunction};
var moment = require('moment');

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('inside async');
      }, 2000);
    });
  }

async function f(){
    console.log("before");
    const res = await resolveAfter2Seconds();
    console.log(res);
    console.log("after");
    console.log(moment());
}

f();
