import React, { useState } from "react"
import "./App.css"
import * as LeadPageComponents from "./components"
import PageBuilder from "./builder/PageBuilder"
import sampleData from "./stubs/siteData"
import { associativeMap } from "./utils"

const App = function() {
  /**
  What does the below function do?
  It takes a website schema
  Converts each section to an array
  Maps over section arrays to add react hooks
  Converts array back into object
   */
  let siteData = associativeMap(sampleData, ([key, value]) => [
    key,
    convertSchemaToStateObject(value)
  ])

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
  return associativeMap(schema, attachState)
}

function attachState([key, field]) {
  if (typeof field !== "object") {
    return
  }

  const [value, setter] = useState(field.default)

  field.value = value
  field.setter = setter

  return [key, field]
}
