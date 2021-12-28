import("./index.css")

import React from "react"

import ReactDom from "react-dom"


    
    ReactDom.render(
      // 
    //  React.createElement("h1",{className:'bluebox'},"Hello I am using webpack and babel"),

      <h1 className="bluebox">Hi Am using babel and webpack</h1>,
     
      document.getElementById("root")
    )


  //  npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader

//  {
//   "presets": ["@babel/env", "@babel/preset-react"]
// }

