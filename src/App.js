import React, { useState } from "react"
import "./App.css"
import * as LeadPageComponents from "./components"
import PageBuilder from "./builder/PageBuilder"
// import associativeMap from "./builder/associative-map"
import sampleData from "./stubs/siteData"

const App = function() {
  // let state = Object.entries(siteData).forEach(field => console.log(field))

  console.log(sampleData)

  console.log(Object.entries(sampleData))

  let siteData = Object.entries(sampleData)
    .flatMap(([key, value]) => {
      const field = Object.create(null)

      field[key] = convertSchemaToStateObject(value)

      return field
    })
    .reduce(convertToObject, {})

  return (
    <main className="relative">
      <PageBuilder sections={siteData} />
      <LeadPageComponents.NavigationBar />
      <LeadPageComponents.HeroSplash {...siteData.heroSplash} />
      <LeadPageComponents.VirtualTour {...siteData.virtualTour} />
      <LeadPageComponents.PropertyHighlights {...siteData.propertyHighlights} />
      <LeadPageComponents.PropertyDetails {...siteData.propertyDetails} />
      <LeadPageComponents.LocationMap {...siteData.locationMap} />
      <LeadPageComponents.PropertyGallery {...siteData.propertyGallery} />
      <LeadPageComponents.Testimonials {...siteData.testimonials} />
      <LeadPageComponents.AgentContact {...siteData.agentContact} />
    </main>
  )
}

export default App

function convertSchemaToStateObject(schema) {
  return Object.entries(schema)
    .flatMap(attachState)
    .reduce(convertToObject, {})
}

function associativeMap(objectToLoopThrough, func) {
  return Object.entries(objectToLoopThrough)
    .flatMap(func)
    .reduce(convertToObject, {})
}

function attachState([key, field]) {
  // console.log(key, field)

  if (typeof field !== "object") {
    return
  }

  const [value, setter] = useState(field.default)

  field.value = value
  field.setter = setter

  const formattedField = Object.create(null)

  formattedField[key] = field

  // console.log(field)

  return formattedField
}

function convertToObject(oldField, field) {
  if (!field || !oldField) {
    return
  }

  const fieldName = Object.keys(field)[0]

  oldField[fieldName] = field[fieldName]

  return oldField
}

/* 
What should our top-level data component do?
It should take a schema and default values
Create React state using schema and default

so let's imagine a possible schema:

locationMapData:
  sectionTitle:
    default: "Location"
    fieldType: text


based on the above schema, how would we set state?

Object.keys(locationMapData).map(key => {
  const field = locationMapData[key]
  const default = field.default

  const setterFunctionName = `set${key}`

  [field.value, field.setter] = useState(default)

  return field
})

[title, setTitle] = setState(default)

now peel off all the first values and send them into component
peel off whole array and send it into builder

builder needs:
field name
current value
setter function
input type
validation rules


so, perhaps: 

locationMapData:
  sectionTitle:
    value: title,
    setter: setSectionTitle
    fieldType: text
*/
