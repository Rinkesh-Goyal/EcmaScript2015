// Named exports force us to use exactly the right name to import
// While for a default export, we always choose the name when importing
// So team members may use different names to import the same thing, and that’s not good.

// Usually, to avoid that and keep the code consistent, there’s a rule that imported variables should correspond to file names

//Re-Export
// Re-export” syntax export ... from ... allows to import things and immediately export them 
//https://javascript.info/import-export

// export * from './user.js' re-exports only named exports, but ignores the default one.
// export * from './user.js'; // to re-export named exports
// export {default} from './user.js'; // to re-export the default export




//Only if the js contains default export
// import User from "D:\\The_Odin_Project\\Practice_FullStack\\EcmaScript2015\\src\\User.js";

//only if JS contins both named and default export
// import {default as User,sayHello} from "D:\\The_Odin_Project\\Practice_FullStack\\EcmaScript2015\\src\\User.js";

import * as usr from "D:\\The_Odin_Project\\Practice_FullStack\\EcmaScript2015\\src\\User.js";

import { sayBye,sayHi } from "D:\\The_Odin_Project\\Practice_FullStack\\EcmaScript2015\\src\\say.js";
sayBye("Harry");
sayHi("Ron");

//used when we are importing using *
let User=usr.default;

const user=new User("Hermoine");
console.log(user.getName());

// User.sayHello();

usr.sayHello();


//Dynamic import
// let {sayHi, sayBye} = await import("D:\\The_Odin_Project\\Practice_FullStack\\EcmaScript2015\\src\\say.js");

// sayHi("Harry");
// sayBye("Draco");