
addThreeNumbers()


function addThreeNumbers(){

    console.log(a)
    console.log(b)
    console.log(c)

   var a='PW';
   let b="Skills";
   const c='!';
    
    console.log(a)
    console.log(b)
    console.log(c)

    
}

// Output
// undefined
// console.log(b)
            //^ 

// ReferenceError: Cannot access 'b' before initialization
//     at addThreeNumbers (d:\WEB DEVELOPMENT\JAVASCRIPT\javaScript execution\04.js:8:17)
//     at Object.<anonymous> (d:\WEB DEVELOPMENT\JAVASCRIPT\javaScript execution\04.js:2:1)
//     at Module._compile (node:internal/modules/cjs/loader:1256:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
//     at Module.load (node:internal/modules/cjs/loader:1119:32)
//     at Module._load (node:internal/modules/cjs/loader:960:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// Node.js v18.17.0