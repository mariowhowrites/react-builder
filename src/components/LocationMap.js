import React from "react"

export default function LocationMap() {
  return (
    <section class="LocationMap mt-24 flex flex-col items-center">
      <h3 className="text-5xl font-normal pt-12 mb-12">Location</h3>
      <p className="text-xl mb-10">5755 NW Sunnyside Drive, Mesa, AZ 85202</p>
      <iframe
        title="map"
        className="w-4/5 mb-20"
        height="450"
        frameborder="0"
        style={{
          border: 0
        }}
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJk2bCNrTb3IARcW50bZz4KTk&key=AIzaSyCd75Xyu4TbxInAcsqwKAE2aH1i-6qt3J8"
        allowfullscreen
      />
    </section>
  )
}
