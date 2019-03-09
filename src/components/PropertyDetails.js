import React from "react"

export default function PropertyDetails() {
  return (
    <section className="PropertyDetails">
      <h3 className="text-center text-3xl font-normal my-20">
        Additional Details
      </h3>
      <div className="flex justify-around w-3/4 mx-auto text-xl mt-8">
        <MainDetailsColumn details={details} />
        <BenefitsColumn benefits={benefits} />
      </div>
    </section>
  )
}

function MainDetailsColumn({ details }) {
  return (
    <div className="flex flex-wrap w-1/3">
      {details.map(detail => {
        return (
          <React.Fragment key={detail.label}>
            <p class="w-1/2 pr-10 opacity-50 mb-4">{detail.label}</p>
            <p class="w-1/2 mb-4">{detail.value}</p>
          </React.Fragment>
        )
      })}
    </div>
  )
}

function BenefitsColumn({ benefits }) {
  return (
    <div className="w-1/2 flex flex-wrap">
      {benefits.map(benefit => (
        <p key={benefit} className="w-1/2 opacity-50">
          <span className="mr-4 text-blue">&#10003;</span>
          {benefit}
        </p>
      ))}
    </div>
  )
}

const details = [
  {
    label: "Status",
    value: "Active"
  },
  {
    label: "Posted On",
    value: "5/24/2017"
  },
  {
    label: "Type",
    value: "Single Family Home"
  },
  {
    label: "Price",
    value: "$590,000"
  },
  {
    label: "Area (ft)",
    value: "4,700"
  },
  {
    label: "Flooring",
    value: "Hardwood / Tile"
  },
  {
    label: "Year Built",
    value: "2004"
  }
]

const benefits = [
  "Living Room 21x14",
  "Swimming Pool",
  "Dining Room COMBO",
  "Gas Heat/Forced Air",
  "Kitchen 14x12",
  "Central Air Conditioning",
  "Master Bedroom 17x12",
  "High Speed Internet Ready",
  "Bedroom 2 12x10",
  "Fireplace",
  "Bedroom 3 12x10",
  "Wet Bar",
  "Den 8x12",
  "Attached Heated Garage"
]
