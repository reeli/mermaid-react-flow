import React from "react"
import {createRoot} from "react-dom/client"
import {Chart} from "./Chart";

createRoot(document.getElementById("app")!).render(
  <div style={{width: 500, height: 500}}>
    <Chart/>
  </div>
)

