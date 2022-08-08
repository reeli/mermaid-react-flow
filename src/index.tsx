import React from "react"
import {createRoot} from "react-dom/client"
import {Chart} from "./Chart";
import {Global, css} from "@emotion/react";

createRoot(document.getElementById("app")!).render(
  <div style={{display:"flex", width:"100%", height:"100%"}}>
    <div style={{width:275}}>side</div>
    <div style={{flex:1}}>
      <Chart/>
    </div>
    <Global
      styles={css`
        html,body,#app {
          width:100%;
          height:100%;
        }
      `}
    />
  </div>
)

