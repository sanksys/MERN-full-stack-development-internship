/*
ES6 MODULES
-----------
Modules allow us to split code into
multiple files and reuse it.

React applications are BUILT using modules.
*/

// -------------------------------------
// 1️⃣ EXPORT (Sharing code)
// -------------------------------------

export const apiUrl = "https://api.example.com";

/*
export:
- Makes variables/functions available to other files
- Prevents polluting global scope
*/

// -------------------------------------
// 2️⃣ IMPORT (Using shared code)
// -------------------------------------

// import { apiUrl } from './file';

console.log("Imported API URL:");
console.log(apiUrl);

/*
import:
- Brings exported code into current file
- File-based code organization
*/

// -------------------------------------
// 3️⃣ WHY MODULES ARE IMPORTANT
// -------------------------------------

/*
Without modules:
- One huge JS file
- Hard to maintain
- Naming conflicts

With modules:
- Clean structure
- Reusable code
- Easy teamwork
*/

// -------------------------------------
// REACT CONNECTION (VERY IMPORTANT)
// -------------------------------------

/*
In React:
- Every component is a module
- Hooks are imported
- APIs are imported

Example:
import React from "react";
import Header from "./Header";
import { useState } from "react";
*/

// -------------------------------------
// SUMMARY 
// -------------------------------------

console.log("\nSUMMARY:");
console.log("export → share code");
console.log("import → use shared code");
console.log("Modules = clean project structure");
