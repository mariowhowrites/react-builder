import React from "react"
import { camelToUcfirst } from "../utils"
import TextField from "./fields/TextField"
import TextareaField from "./fields/TextareaField"

export default function BuilderSections({ sections }) {
  return (
    <div className="flex flex-col">
      <h1>Welcome to Site Builder!!!</h1>

      {Object.entries(sections).map(section => (
        <BuilderSection section={section} />
      ))}
    </div>
  )
}

function BuilderSection({ section }) {
  const [key, fields] = section
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
}

function BuilderField({ field, fieldName, sectionName }) {
  fieldName = camelToUcfirst(fieldName)

  switch (field.type) {
    case "text":
      return <TextField fieldName={fieldName} field={field} />
    case "textarea":
      return <TextareaField fieldName={fieldName} field={field} />
    default:
      return null
  }
}
