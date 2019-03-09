import React, { useState } from "react"
import "./App.css"
import * as LeadPageComponents from "./components"
export default function App() {
  return (
    <React.Fragment>
      <LeadPageComponents.NavigationBar />
      <LeadPageComponents.HeroSplash />
      <LeadPageComponents.VirtualTour />
      <LeadPageComponents.PropertyHighlights />
      <LeadPageComponents.PropertyDetails />
      <LeadPageComponents.LocationMap />
      {/* <LeadPageComponents.FloorPlan /> */}
      <LeadPageComponents.PropertyGallery />
      <LeadPageComponents.Testimonials />
      <LeadPageComponents.AgentContact />
    </React.Fragment>
  )
}
