import React from "react"

export const Small = React.memo(({value}) => {
  console.log("Se debujo el componente Small")
  return (
    <>{value}</>
  )
})
