import React from "react"

export default function LocationMap({
  sectionTitle,
  streetAddress,
  city,
  state,
  zipCode,
  googleMapLink
}) {
  return (
    <section className="LocationMap mt-24 flex flex-col items-center">
      <h3 className="text-5xl font-normal pt-12 mb-12">{sectionTitle.value}</h3>
      <p className="text-xl mb-10">
        {streetAddress.value}, {city.value}, {state.value} {zipCode.value}
      </p>
      <iframe
        title="map"
        className="w-4/5 mb-20"
        height="450"
        frameBorder="0"
        style={{
          border: 0
        }}
        src={googleMapLink.value}
        allowFullScreen
      />
    </section>
  )
}
