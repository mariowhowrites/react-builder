import React from "react"

export default function VirtualTour({ sectionTitle, video, description }) {
  return (
    <section className="bg-blue-darkest h-screen flex flex-col justify-center items-center text-white antialiased">
      <h2 className="text-5xl mt-16 pb-8 font-normal">{sectionTitle.value}</h2>
      <p className="pb-10 text-lg">{description.value}</p>
      <iframe
        className="mt-4"
        title="video"
        width={650 * 2.1}
        height={315 * 2.1}
        src={video.value}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  )
}
