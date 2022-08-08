import {FC} from "react";

export const Circle: FC= ({data}: any) => {
  return (
    <div
      css={{
        border: "1px solid #9ca8b3",
        padding: "14px",
        borderRadius: "20px",
        background:"#fff"
      }}
    >
      <div id={data.id}>{data.label}</div>
    </div>
  )
}
