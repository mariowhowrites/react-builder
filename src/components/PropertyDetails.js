import React from "react"

export default function PropertyDetails({ sectionTitle, details, benefits }) {
  return (
    <section className="PropertyDetails">
      <h3 className="text-center text-3xl font-normal my-20">
        {sectionTitle.value}
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
      {details.value.map(detail => {
        return (
          <React.Fragment key={detail.label}>
            <p className="w-1/2 pr-10 opacity-50 mb-4">{detail.label}</p>
            <p className="w-1/2 mb-4">{detail.value}</p>
          </React.Fragment>
        )
      })}
    </div>
  )
}

function BenefitsColumn({ benefits }) {
  return (
    <div className="w-1/2 flex flex-wrap">
      {benefits.value.map(benefit => (
        <p key={benefit} className="w-1/2 opacity-50">
          <span className="mr-4 text-blue">&#10003;</span>
          {benefit}
        </p>
      ))}
    </div>
  )
}
