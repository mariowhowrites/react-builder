import React from "react"
import { camelToUcfirst } from "../../utils"

export default function TextField({ fieldName, field }) {
  const displayTitle = camelToUcfirst(fieldName)

  return (
    <span className="TextField my-2 flex">
      <label
        htmlFor={fieldName}
        className="font-semibold opacity-50 w-1/3 flex items-center"
      >
        {displayTitle}
      </label>
      <input
        type="text"
        className="border-2 shadow-sm w-1/2 p-2"
        value={field.value}
        onChange={event => field.setter(event.target.value)}
      />
    </span>
  )
}
