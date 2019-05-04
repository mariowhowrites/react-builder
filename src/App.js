import React, { useState } from "react"
import "./App.css"
import * as LeadPageComponents from "./components"
import PageBuilder from "./builder/PageBuilder"
import sampleData from "./stubs/siteData"

const App = function() {
  
  /**
  What does the below function do?
  It takes a website schema
  Converts each section to an array
  Maps over section arrays to add react hooks
  Converts array back into object
   */
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

function attachState([key, field]) {
  if (typeof field !== "object") {
    return
  }

  const [value, setter] = useState(field.default)

  field.value = value
  field.setter = setter

  const formattedField = Object.create(null)

  formattedField[key] = field

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
