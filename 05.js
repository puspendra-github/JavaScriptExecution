a()

function a(){
    console.log(x)
    let x='hello';

    console.log(x)
}

// Output
// console.log(x)
            //^

// ReferenceError: Cannot access 'x' before initialization
// at a (d:\WEB DEVELOPMENT\JAVASCRIPT\javaScript execution\05.js:4:17)
// at Object.<anonymous> (d:\WEB DEVELOPMENT\JAVASCRIPT\javaScript execution\05.js:1:1)
// at Module._compile (node:internal/modules/cjs/loader:1256:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
// at Module.load (node:internal/modules/cjs/loader:1119:32)
// at Module._load (node:internal/modules/cjs/loader:960:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:23:47

// Node.js v18.17.0