// .js works as befor 
import './esm-as' //.js, .ts, .d.ts
import './cjs-as' //.js, .ts, .d.ts

// When Specifier is used does not lookup ext.d.ts
import './module' //Current order .ts => d.ts => .js => .cjs or .mjs
import './module.cjs' // Should not resolve to module.js module.ts but module.d.ts or module.cjs!!!!

import './module-with-dts.mjs' // .mjs.d.ts .d.ts works should not resolves to .js .ts
import './module-with-dts' // should resolve './module-with-dts.mjs', './module-with-dts.mjs.d.ts', only './module-with-dts.d.ts' works also wrong resolves to .js .ts

import './module-without-dts.mjs' // This should NOT resolve to './module-without-dts.js' './module-without-dts.ts'
import './module-without-dts' 