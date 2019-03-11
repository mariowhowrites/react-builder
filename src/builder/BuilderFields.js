import React from "react"
import camelToUcfirst from "../utils/camelToUcfirst"

export default function BuilderFields({ sections }) {
  return (
    <div className="flex flex-col">
      <h1>Welcome to Site Builder!!!</h1>

      {Object.entries(sections).map(([key, fields]) => {
        const builderSectionTitle = camelToUcfirst(key)

        return (
          <div key={key} id={builderSectionTitle + "Builder"}>
            <h3>{builderSectionTitle}</h3>
            {Object.entries(fields).map(([fieldName, field]) => (
              <BuilderField
                field={field}
                fieldName={fieldName}
                sectionName={builderSectionTitle}
                key={builderSectionTitle + fieldName + "Field"}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

function BuilderField({ field, fieldName, sectionName }) {
  fieldName = camelToUcfirst(fieldName)

  const fieldId = sectionName + "-" + fieldName

  switch (field.type) {
    case "text":
      console.log("textfield...")
      return <TextField fieldName={fieldName} field={field} />
    case "textarea":
      return <TextareaField fieldName={fieldName} field={field} />
    default:
      return null
  }
}

function TextField({ fieldName, field }) {
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

function TextareaField({ fieldName, field }) {
  const displayTitle = fieldName
    .split(/(?=[A-Z])/) // splits string on capital letters (StackOverflow ftw)
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(" ")

  return (
    <span className="TextField my-2 flex">
      <label
        htmlFor={fieldName}
        className="font-semibold opacity-50 w-1/3 flex items-center"
      >
        {displayTitle}
      </label>
      <textarea
        className="border-2 shadow-sm w-1/2 p-2"
        rows="5"
        value={field.value}
        onChange={event => field.setter(event.target.value)}
      />
    </span>
  )
}
