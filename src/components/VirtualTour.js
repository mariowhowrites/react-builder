import React from "react"

export default function VirtualTour() {
  return (
    <section className="bg-blue-darkest h-screen flex flex-col justify-center items-center text-white antialiased">
      <h2 className="text-5xl mt-16 pb-8 font-normal">Take a Virtual Tour</h2>
      <p className="pb-10 text-lg">
        Watch the video below and see all the luxury that 5755 NW Sunnyside
        Drive offers you.
      </p>
      <iframe
        className="mt-4"
        title="video"
        width={650 * 2.1}
        height={315 * 2.1}
        src="https://www.youtube.com/embed/mPfGE8M0YPM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </section>
  )
}
